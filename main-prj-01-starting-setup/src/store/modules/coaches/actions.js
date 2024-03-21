export default {
  async registerCoach(context, payload) {
    console.log(payload);
    const userId = context.rootGetters.userId;
    const coachData = {
      coachId: context.rootGetters.userId,
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };

    // const jsonData = {
    //   ...coachData,
    //   areas: JSON.parse(JSON.stringify(coachData.areas))
    // }

    let response = await fetch(`http://localhost:8090/coaches/coach`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJKYWVteXVuZyBQYXJrIiwic3ViIjoiSldUIFRva2VuIiwidXNlcm5hbWUiOiJhZG1pbiIsImF1dGhvcml0aWVzIjoiUk9MRV9BRE1JTiIsImlhdCI6MTcxMDkxOTk5NCwiZXhwIjoxNzEwOTQ5OTk0fQ.9V_zm72qnlGNfMBieG5MbKQ9hGozsgH8BFGeVUZQN-o`,
      },
      body: JSON.stringify(coachData),
    });

    // const responseData = response.json();
    console.log(response);
    console.log(response.text());
    if (!response.ok) {
      // error...
      console.log('error');
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId,
    });
  },
  async loadCoaches(context, payload) {
    if(!context.getters.shouldUpdate && !payload.forceRefresh) {
      return;
    }
    
    const response = await fetch(`http://localhost:8090/coaches/list`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJKYWVteXVuZyBQYXJrIiwic3ViIjoiSldUIFRva2VuIiwidXNlcm5hbWUiOiJhZG1pbiIsImF1dGhvcml0aWVzIjoiUk9MRV9BRE1JTiIsImlhdCI6MTcxMDkxOTk5NCwiZXhwIjoxNzEwOTQ5OTk0fQ.9V_zm72qnlGNfMBieG5MbKQ9hGozsgH8BFGeVUZQN-o`,
      },
    });

    const responseData = await response.json();
    console.log(responseData);

    if (!response.ok) {
      // error
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const coaches = [];
    responseData.forEach(coach => {
      coaches.push({
        id: coach.coachId,
        firstName: coach.firstName,
        lastName: coach.lastName,
        description: coach.description,
        hourlyRate: coach.hourlyRate,
        areas: coach.stringAreas.split(', '),
      });
    })

    context.commit('setCoaches', coaches);
    context.commit('setFetchTimeStamp');
  },
};
