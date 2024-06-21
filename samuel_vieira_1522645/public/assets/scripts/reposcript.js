document.addEventListener("DOMContentLoaded", function () {
    const repoId = localStorage.getItem('selectedRepoId');
            if (repoId) {
                fetch(`https://api.github.com/repositories/${repoId}`)
                    .then(res => res.json())
                    .then(data => {
                        mostrarDetalhes(data);
                    })
                    .catch(error => console.error("Erro ao buscar dados do repositório:", error));
            } else {
                console.error("ID do repositório não encontrado no localStorage.");
            }

    function MostrarQuestao(data){
        const mostrarquestao = document.getElementById("mostrarQuestao");
        const div = document.createElement("div");
        div.className = 'row';
        div.innerHTML = `<div class="col-lg-11">
                <span class="fw-bold text-primary" >Descrição</span>
                <p>
                    
                </p>
                <span class="fw-bold text-primary ">Data de criação</span>
                <p>

                </p>
                <span class="fw-bold text-primary ">Linguagem</span>
                <p>

                </p>
                <span class="fw-bold text-primary ">Topicos</span>
                <p>
                    
                </p>
                <span class="fw-bold text-primary">Link de acesso</span>
                <p>
                    <button type="button"class="btn btn-light">
                        <a target="_blank" class="text-dark text-decoration-none" href="https://github.com/SamuelGarciaVieira/Projeto-Primeiro-Site?tab=readme-ov-file#projeto-inicial">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                            <span class="fw-bold">Repositorio</span>
                        </a>
                    </button>
                </p>
            </div>
            <div class="col-lg">
                <i class="bi bi-person-fill h4 p-1"></i>
                <i class="bi bi-star h4 ps-2 p-1"></i>
            </div>
        `;
        mostrarquestao.append(div);
    }
})