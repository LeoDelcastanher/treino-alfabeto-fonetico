import {Component, OnInit} from '@angular/core';
import {AlfaFon} from "../../assets/interfaces/AlfaFon";
import {AlfaFonService} from "../services/alfa-fon.service";


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

  constructor(private alfaFonService: AlfaFonService) {
  }

  ngOnInit(): void {
    this.alfaFonService.getAlfaFons().then(result => {
      this.alfa = result;
      this.setCurrentAlfa();
      console.warn(this.currentAlfa);
    });
  }

  setCurrentAlfa() {
    this.currentAlfa.letter = this.alfa[0].letter;
    this.currentAlfa.answer = this.alfa[0].answer;
    this.currentAlfa.wrongs = this.alfa[0].wrongs.splice(2, 3);
  }

  answerResult(result: boolean) {
    console.warn(result);
    this.answered = true;
  }

}
