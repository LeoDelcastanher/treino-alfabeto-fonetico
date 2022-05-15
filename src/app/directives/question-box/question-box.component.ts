import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {AlfaFon} from "../../../assets/interfaces/AlfaFon";
import {ToolsService} from "../../services/tools.service";

@Component({
  selector: 'question-box',
  templateUrl: './question-box.component.html',
  styleUrls: ['./question-box.component.scss']
})
export class QuestionBoxComponent implements OnInit {
  @Input() alfaQuestion: AlfaFon = {
    letter: '',
    answer: '',
    wrongs: [],
    trimmedWrongs: ['', '', '']
  };
  @Output() answerResult = new EventEmitter<boolean>();
  questionOrder = [
    'W1', 'W2', 'W3', 'C'
  ];
  selectedType = '';
  resultClass = '';
  lock: boolean = false;

  constructor(private tools: ToolsService) {
  }

  ngOnInit(): void {
    this.questionOrder = this.tools.shuffle(this.questionOrder);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.warn('ngOnChanged');
    console.warn(changes);
    this.cleanScreen();
  }

  cleanScreen() {
    this.selectedType = '';
    this.resultClass = '';
    this.lock = false;
  }

  getQuestion(questionType: string): string {
    switch (questionType) {
      case 'W1':
        return this.alfaQuestion.wrongs[0];
        break;

      case 'W2':
        return this.alfaQuestion.wrongs[1];
        break;

      case 'W3':
        return this.alfaQuestion.wrongs[2];
        break;

      default:
        return this.alfaQuestion.answer;
        break;
    }
  }

  selectAnswer(selectedAnswerType: string) {
    console.log(`selectAnswer(${selectedAnswerType})`);
    this.selectedType = selectedAnswerType;
    let result = selectedAnswerType == 'C';
    if (result) {
      this.resultClass = 'correct';
    } else {
      this.resultClass = 'wrong';
    }
    this.lock = true;
    this.answerResult.emit(result);
  }

  getSelectedClass(selectedAnswerType: string): string {
    if (!this.selectedType) {
      return '';
    }
    if (selectedAnswerType == this.selectedType) {
      return this.resultClass;
    }
    return '';
  }
}
