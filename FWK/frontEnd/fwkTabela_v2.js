let tabela = document.getElementsByTagName("tabela");

for(let i=0;i<tabela.length;i++){
    let tab = tabela[i];

    let linhas= tab.getAttribute("linha");
    let colunas= tab.getAttribute("coluna");

    if(!linhas || !colunas){
        alert("Erro: é obrigatório informar linhas e colunas da tabela.");
return;
    }

    linhas = parseInt(linhas);
    colunas = parseInt(colunas);

    let novaTabela= document.createElement("table");

    let colspanAttr= tab.getElementsByTagName("expand");
    let dadosTag = tab.getElementsByTagName("dados")[0];

    let dados=[];
    let matriz=[];

    for(let w=0; w<colspanAttr.length;w++){
        let l = parseInt(colspanAttr[w].getAttribute("linha"));
        let c = parseInt(colspanAttr[w].getAttribute("coluna"));
        let tamanho = parseInt(colspanAttr[w].getAttribute("tamanho"));

        if(l >= linhas || c >= colunas){
            alert("Erro: expand fora da tabela (" + l + "," + c + ").");
return;
        }

        if(c + tamanho > colunas){
            alert("Erro: colspan inválido (" + l + "," + c + ").");
return;
        }

        matriz.push([l, c, tamanho]);
    }

    if(dadosTag){
        let texto= dadosTag.textContent.trim();
        let linhaDados= texto.split("\n");

        for(let linha of linhaDados){
            if(linha.trim() === "") continue;

            let colunasDados= linha.split("|");
            dados.push(colunasDados.map(c => c.trim()));
        }

        if(dados.length > linhas){
            alert("Erro: quantidade de linhas de dados maior que a tabela.");
return;
        }

        for(let i=0; i<dados.length; i++){
            if(dados[i].length > colunas){
                alert("Erro: dados excedem colunas na linha " + i + ".");
return;
            }
        }
    }

    let bordaAttr =  tab.getAttribute("borda");
    if(bordaAttr){
        let vetBorda = bordaAttr.split(" ");
        novaTabela.style.setProperty('--cor-borda', vetBorda[2]);
        novaTabela.style.setProperty('--tipo-borda', vetBorda[1]);
        novaTabela.style.setProperty('--tamanho-borda', vetBorda[0]);
    }

    for(let x=0;x<linhas;x++){
        let tr=document.createElement("tr");

        for(let y=0;y<colunas;y++){
            let td=document.createElement("td");

            if(dados[x] && dados[x][y]){
                td.innerText=dados[x][y];
            }

            let span=1;
            for(let k =0; k<matriz.length;k++){
                if(matriz[k][0] == x && matriz[k][1]==y){
                    span=matriz[k][2];
                    break;
                }
            }

            if(span>1){
                td.setAttribute("colspan",span);
            }

            y += span-1;

            tr.appendChild(td);
        }

        novaTabela.appendChild(tr);
    }

    tab.appendChild(novaTabela);
}