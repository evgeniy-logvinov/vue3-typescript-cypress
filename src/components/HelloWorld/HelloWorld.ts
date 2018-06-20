import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  
  @Prop() private text!: string;
  
  @Prop() private active!: null;
    
  @Emit()
  public addToCount(n: number) {
    console.log('n', n);
  }
}
