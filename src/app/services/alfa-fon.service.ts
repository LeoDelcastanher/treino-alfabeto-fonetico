import { Injectable } from '@angular/core';
import {AlfaFon} from "../../assets/interfaces/AlfaFon";
import {ToolsService} from "./tools.service";

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
    {
      letter: 'C',
      answer: 'Charlie',
      wrongs: ['cerne', 'casal', 'coser', 'corja', 'causa', 'crivo', 'ceder', 'comum', 'culto', 'censo', 'cozer', 'criar', 'clava', 'coisa', 'cunho', 'cisma', 'certo', 'crise', 'casta', 'citar', 'coeso', 'cabal', 'cisão', 'cesta', 'calma', 'ciúme', 'claro', 'carma', 'cauda', 'capaz', 'caçar', 'coçar', 'cruel', 'coesa', 'casto', 'covil', 'credo', 'ciclo', 'corno', 'chata', 'comer', 'chuva', 'chulo', 'carro', 'campo', 'corpo', 'cheio', 'certa', 'cópia', 'caixa', 'conta',]
    },
    // {
    //   letter: '',
    //   answer: '',
    //   wrongs: []
    // },
    // {
    //   letter: '',
    //   answer: '',
    //   wrongs: []
    // },
  ];

  constructor(private tools: ToolsService) { }


  getAlfaFons(): Promise<AlfaFon[]> {
    return new Promise((resolve, reject) => {
      resolve(this.baseAlfaFon);
    });
  }

  getRandomCurrentAlfa(alfaFonList: AlfaFon[]): AlfaFon {
    let randomInt = this.tools.randomIntFromInterval(0, alfaFonList.length-1);
    return alfaFonList[randomInt];
  }
}
