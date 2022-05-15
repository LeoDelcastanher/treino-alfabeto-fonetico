import { Injectable } from '@angular/core';
import {AlfaFon} from "../../assets/interfaces/AlfaFon";

@Injectable({
  providedIn: 'root'
})
export class AlfaFonService {
  baseAlfaFon = [
    {
      letter: 'A',
      answer: 'Alfa',
      wrongs: ['algoz', 'afeto', 'aquém', 'audaz', 'assim', 'anexo', 'amigo', 'ardil', 'assaz', 'atroz', 'ainda', 'apraz', 'atrás', 'afago', 'acaso', 'apóia', 'areal', 'andré', 'apito', 'alvor', 'abril', 'arder', 'aguça', 'amuar', 'acuar', 'afiar', 'amido', 'arerê', 'atriz', 'atiça']
    },
    {
      letter: 'B',
      answer: 'Bravo',
      wrongs: ['boçal', 'brado', 'banal', 'bruma', 'branco', 'burro', 'brega', 'botar', 'brisa', 'beata', 'breve', 'birra', 'banto', 'barro', 'bolso', 'baixa', 'burra', 'bedel', 'barra', 'buril', 'bossa', 'bruxa', 'baita', 'bílis', 'batel', 'burgo', 'borda', 'basal', 'bardo', 'broto',]
    },
  ];

  constructor() { }


  getAlfaFons(): Promise<AlfaFon[]> {
    return new Promise((resolve, reject) => {
      resolve(this.baseAlfaFon);
    });
  }

  // getRandomCurrentAlfa(alfaFonList: AlfaFon[]): AlfaFon {
  //
  // }
}
