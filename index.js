const btnCurriculo = document.getElementById('btn-curriculo');

btnCurriculo.addEventListener('click', function() {
    // URL do arquivo que você quer baixar
    const urlDoArquivo = './curriculo2024.pdf';

    // Criar um elemento <a> para iniciar o download
    const linkParaDownload = document.createElement('a');
    linkParaDownload.setAttribute('href', urlDoArquivo);
    linkParaDownload.setAttribute('download', 'nome-do-arquivo.pdf');

    // Adicionar o link ao documento
    document.body.appendChild(linkParaDownload);

    // Acionar o evento de clique no link
    linkParaDownload.click();

    // Remover o link após o download
    document.body.removeChild(linkParaDownload);
});
