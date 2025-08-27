class Result {

  correct: boolean;
  errorMessage: string;
  ex: any;
  object: any;
  objects: Array<any>;


  constructor(correct: boolean, errorMessage: string, objects: Array<any>) {

    this.correct = correct;
    this.errorMessage = errorMessage;
    this.objects = objects;

  }

}
