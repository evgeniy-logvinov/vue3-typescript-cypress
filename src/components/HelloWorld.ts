import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  @Emit()
  public addToCount(n: number) {
    console.log('n', n);
  }
}