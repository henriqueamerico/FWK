<?php
class Arquivos{
    public $arquivo="arquivo.txt";
    public $diretorio="pasta/";
    public function criarArquivo(){
            $atributos=[];
       
          $conteudo= <<<CLASS

          CLASS;
    
   
        $conteudo="Olá nestor!";
        file_put_contents($this->diretorio.$this->arquivo,$conteudo) ;
        echo "Arquivo criado com sucesso!";
    }

    function criarDiretorio(){
        if(!is_dir($this->diretorio)){
            mkdir($this->diretorio,0777,true);
        
         }      
        }
        function lerArquivo(){
            $conteudo=file_get_contents($this->diretorio.$this->arquivo);
            echo "Conteúdo do arquivo: " . $conteudo;
            echo "<hr>". $conteudo;
        }
            
    
}
$obj= new Arquivos();
$obj->criarDiretorio();
$obj->criarArquivo();
$obj->lerArquivo();