<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  // props: ['topics'],
  inject: ['topics'], // 삽입은 상위 레벨에서 제공한 것만 가능함.
  // emits: ['select-topic']
};
</script>