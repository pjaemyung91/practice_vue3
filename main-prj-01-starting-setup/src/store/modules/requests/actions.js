export default {
  async contactCoach(context, payload) {
    const newRequest = {
      // id: new Date().toISOString(),
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message
    };
    
    const response = await fetch(`http://localhost:8090/requests/request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRequest)
    })
    
    const responseData = await response.json();
    console.log(responseData);
    
    if(!response.ok) {
      const error = new Error(responseData.message || 'Failed to send request');
      throw error;
    }
    
    newRequest.id = responseData.id;
    
    // context.commit('addRequest', {
    //   ...newRequest,
    //   id: responseData.id
    // });
    
    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const userId = context.rootGetters.userId;
    const response = await fetch(`http://localhost:8090/requests/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    const responseData = await response.json();
    
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send request');
      throw error;
    }
    
    const requests = [];
    responseData.forEach(request => {
      requests.push({
        id: request.id,
        coachId: userId,
        userEmail: request.email,
        message: request.message,
      });
    })
    
    context.commit('setRequests', requests);
  }
};
