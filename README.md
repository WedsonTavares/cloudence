react icons
tailwind
tailwind dark mode
<!--
Cloudence - Landing page (Next.js + Tailwind)
Este README foi gerado automaticamente a partir da análise do repositório.
-->

<h2 align="center">Cloudence — Landing Page (CodeVance)</h2>

Página de demonstração totalmente responsiva para uma empresa de software (CodeVance). Desenvolvida com Next.js, React, Tailwind CSS e algumas bibliotecas auxiliares (AOS, react-icons, next-themes).

<a href="cloudence.netlify.app" target="_blank" rel="noopener"><strong>➥ Ver Demonstração</strong></a>

<h1 align="center">Cloudence — Landing Page (Frontend)</h1>

Este projeto é uma landing page para uma empresa de desenvolvimento de software — construída com Next.js (app router), TypeScript e Tailwind CSS.

---

## Sumário

- [Demonstração](#demonstra%C3%A7%C3%A3o)
- [Screenshots](#screenshots)
- [Recursos](#recursos)
- [Como rodar localmente](#como-rodar-localmente)
- [Commit & Push (passo a passo)](#commit--push-passo-a-passo)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Contribuição](#contribui%C3%A7%C3%A3o)
- [Contato](#contato)
- [Licença](#licen%C3%A7a)

---


## Demonstração

O projeto usa o App Router do Next.js. Para ver a demo localmente rode o servidor de desenvolvimento.

Visualizar Demo (repositório): <a href="https://github.com/WedsonTavares/cloudence" target="_blank" rel="noopener">https://github.com/WedsonTavares/cloudence</a>

URL sugerida para GitHub Pages (se você exportar como site estático): <a href="cloudence.netlify.app" target="_blank" rel="noopener">cloudence.netlify.app</a>

Observação: a demo hospedada automaticamente por Next (Vercel) funciona melhor para projetos Next.js. Caso queira usar GitHub Pages é necessário gerar export estático (next export) e hospedar os arquivos gerados.

---

## Screenshots

As imagens do site estão dentro de `public/images/`. Use estas imagens quando quiser montar previews no README.

> Observação: se as imagens não aparecerem, verifique se os arquivos existem em `public/images/` e têm os nomes corretos (p1.png, hero.png, about.png, etc.).

---

## Recursos

- Construído com Next.js (App Router) e TypeScript
- Estilização com Tailwind CSS (inclui variante dark)
- Suporte a temas com `next-themes`
- Animações de scroll com AOS
- Componentes: Navbar responsivo, Hero, Serviços, Sobre, Projetos, Reviews e Blog
- Responsivo: projetado para mobile → desktop
- Componentização clara em `components/Home/*`

---

## Como rodar localmente

1. Clone o repositório:

```bash
git clone https://github.com/WedsonTavares/cloudence.git
cd cloudence
```

2. Instale as dependências:

```bash
npm install
```

3. Rode em modo de desenvolvimento:

```bash
npm run dev
# abra http://localhost:3000
```

4. Para gerar uma build de produção:

```bash
npm run build
npm run start
```

Observações de deploy:
- Para deploy recomendado use Vercel (integração nativa com Next.js).
- Para GitHub Pages: rode `next export` após `next build` e publique a pasta `out/` (requer adaptações se usar rotas dinâmicas ou recursos SSR).

---

## Commit e Push — passo a passo

Use estes comandos para commitar e enviar as alterações ao remoto (assume a branch `main`):

```bash
# 1) conferir status
git status

# 2) adicionar arquivos alterados
git add .

# 3) commitar com mensagem clara
git commit -m "docs: atualizar README com informações do projeto"

# 4) enviar para o repositório remoto
git push origin main
```

Se precisar trocar a URL do remoto:

```bash
git remote remove origin
git remote add origin https://github.com/WedsonTavares/cloudence.git
git push -u origin main
```

---

## Estrutura do projeto

- `app/` — entrada principal (Next.js App Router)
	- `layout.tsx` — wrapper global com Provider, Navbar, Footer
	- `page.tsx` — página inicial que renderiza `components/Home/Home`
- `components/` — componentes React organizados por área
	- `Home/` — Hero, Services, About, WhyChoose, Software, Project, Review, Blog, NavBar e Footer
	- `HOC/Provider.tsx` — provider com `next-themes`
	- `Helper/` — utilitários UI (Theme toggle, Scroll to top)
- `public/images/` — imagens usadas no site
- `constant/constant.ts` — links de navegação e constantes
- `app/globals.css` — estilos globais e configurações Tailwind
- `package.json` — scripts e dependências (Next 15, React 19, Tailwind 4)

---

## Contribuição

1. Faça um fork
2. Crie uma branch: `git checkout -b minha-mudanca`
3. Faça alterações e commite
4. Abra um Pull Request

---

## Contato

- GitHub: <a href="https://github.com/WedsonTavares" target="_blank" rel="noopener">https://github.com/WedsonTavares</a>
- Email: wedsonsobral@gmail.com

---

## Licença

Projeto livre para estudo e uso pessoal. Inclua atribuição se compartilhar publicamente.

---

<!-- Fim do README gerado automaticamente -->