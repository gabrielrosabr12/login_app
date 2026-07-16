import { Component, EventEmitter, Output } from '@angular/core';

interface noteDto{
  title:string,
  body: string

}


@Component({
  selector: 'app-default-report-ocorrency',
  imports: [],
  templateUrl: './default-report-ocorrency.html',
  styleUrl: './default-report-ocorrency.css',
})
export class DefaultReportOcorrency {
  @Output() label!:string;
  @Output() inputId!:string;
  @Output() filesChange = new EventEmitter<File[]>();

  // Variáveis para os campos de texto (você pode usar formControl/formGroup se preferir)
  tituloNota: string = '';
  descricaoDetalhada: string = '';

  // Array que vai guardar os arquivos selecionados na interface
  selectedFiles: File[] = [];

  /**
   * Método disparado quando o usuário seleciona arquivos no input oculto
   */
  onFilesSelected(event: any): void {
    const files: FileList = event.target.files;

    if (files) {
      for (let i = 0; i < files.length; i++) {
        // Adiciona cada arquivo selecionado ao nosso array
        this.selectedFiles.push(files[i]);

      }
    }
    this.filesChange.emit(this.selectedFiles);
    // Limpa o valor do input nativo.
    // Isso é importante para permitir que o usuário adicione o mesmo arquivo duas vezes
    // ou selecione mais arquivos em sequência sem bugar o evento (change).
    event.target.value = '';
  }

  /**
   * Método disparado ao clicar no "X" da lista de arquivos
   */
  removeFile(index: number): void {
    // Remove 1 elemento do array na posição (index)
    this.selectedFiles.splice(index, 1);
    this.filesChange.emit(this.selectedFiles)
  }

  /**
   * Método disparado ao clicar no botão "REGISTRAR OCORRÊNCIA"
   */
  @Output() onSubmit(): void {
    // Para enviar arquivos + texto, não podemos usar um JSON simples.
    // Precisamos montar um FormData.
    const formData = new FormData();
    const dtoNota:noteDto = {
      title:this.tituloNota,
      body:this.descricaoDetalhada
    }

    // 1. Adicionando os campos de texto
    formData.append('noteDto', new Blob([JSON.stringify(dtoNota)], { type: 'application/json' }));

    // 2. Adicionando os arquivos
    // O nome 'anexos' aqui DEVE ser exatamente o mesmo nome do parâmetro
    // @RequestParam("anexos") MultipartFile[] anexos lá no seu Controller do Spring Boot
    this.selectedFiles.forEach((file) => {
      formData.append('files', file);
    });

    // Aqui você chamaria o seu Service do Angular para fazer o POST HTTP
    console.log('Iniciando envio para a API...');

    // Exemplo de como seria a chamada:
    // this.ocorrenciaService.salvarOcorrencia(formData).subscribe({
    //   next: (response) => console.log('Salvo com sucesso!', response),
    //   error: (err) => console.error('Erro ao salvar', err)
    // });
  }
}
