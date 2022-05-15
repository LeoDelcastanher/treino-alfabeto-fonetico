import {Component, OnInit} from '@angular/core';
import {AlfaFon} from "../../assets/interfaces/AlfaFon";
import {AlfaFonService} from "../services/alfa-fon.service";
import {ToolsService} from "../services/tools.service";


@Component({
  selector: 'app-alfa',
  templateUrl: './alfa.component.html',
  styleUrls: ['./alfa.component.scss']
})
export class AlfaComponent implements OnInit {
  alfa: AlfaFon[] = [];
  currentAlfa: AlfaFon = {
    letter: '',
    answer: '',
    wrongs: []
  };
  answered: boolean = false;

  constructor(private alfaFonService: AlfaFonService, private tools: ToolsService) {
  }

  ngOnInit(): void {
    this.alfaFonService.getAlfaFons().then(result => {
      this.alfa = result;
      let tempAlfa = this.alfaFonService.getRandomCurrentAlfa(this.alfa);
      this.setCurrentAlfa(tempAlfa);
      this.createTrimmedWrongAnswers();
      console.warn(this.currentAlfa);
    });
  }

  setCurrentAlfa(alfa: AlfaFon) {
    this.currentAlfa = alfa;
  }

  createTrimmedWrongAnswers() {
    let shuffledWrongAnswers = this.tools.shuffle(this.currentAlfa.wrongs);
    this.currentAlfa.trimmedWrongs = shuffledWrongAnswers.splice(0, 3);
  }

  answerResult(result: boolean) {
    console.warn(result);
    this.answered = true;
  }

  tryAgain() {
    this.answered = false;
    let olfAlfa = Object.assign({}, this.currentAlfa);
    this.setCurrentAlfa(olfAlfa);
    this.createTrimmedWrongAnswers();
    this.createTrimmedWrongAnswers();
  }

  nextQuestion() {
    this.answered = false;
    let tempAlfa = this.alfaFonService.getRandomCurrentAlfa(this.alfa);
    this.setCurrentAlfa(tempAlfa);
    this.createTrimmedWrongAnswers();
  }

}
