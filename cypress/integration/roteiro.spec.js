/// <reference types="cypress"/>

describe('Roteiro Google', () => {
    //Inicio dos testes
    it('Pesquisa por botão “Pesquisa Google”', () => {
        // Comando visit é o responsável por visitar o endereço onde será efetuado os testes
        cy.visit('/'); 
        // Comando get é o comando que seleciona um elemento DOM por seletor ou um alias e o comando type irá digitar o valor inserido no comando
        cy.get('[title="Pesquisar"]').type('JavaScript');
        // Comando contains é responsável por buscar todo elemento que contenha os caracteres descritos no comando e o click é para executar a ação de clicar nesse elemento 
        cy.contains('Pesquisa Google').click();
        // Comando wait é o responsável por forçar uma espera
        cy.wait(100); 
    });

    it('Pesquisa por botão “Estou com sorte”', () => {
        cy.visit('/');
        cy.get('[title="Pesquisar"]').type('JavaScript');
        cy.contains('Estou com sorte').click();
    });

    it('Acessar um link da busca', () => {
        cy.visit('/');
        cy.get('[title="Pesquisar"]').type('JavaScript');
        cy.contains('Pesquisa Google').click();
        cy.get(':nth-child(1) > .rc > .r > a > .LC20lb').click();
        cy.wait(100);
    });

    it('Avançar página de resultados', () => {
        cy.visit('/');
        cy.get('[title="Pesquisar"]').type('JavaScript');
        cy.contains('Pesquisa Google').click();
        cy.get('tr > :nth-child(3) > .fl').click();
    });
});