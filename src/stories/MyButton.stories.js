import MyButton from '../components/MyButton.vue';

export default {
  title: 'Components/MyButton',
  component: MyButton,
};

const Template = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<MyButton v-bind="args" @click="externalClickHandler" />'
});

export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
  backgroundColor: 'green',
  size: 'md'
};

// You can add more stories to showcase different states or variations of the component.
