# Portfólio · Lucas Freitas

Site pessoal em [lucasfullstack.com.br](https://lucasfullstack.com.br).

Feito em Next.js com exportação estática, a partir do template
[dillionverma/portfolio](https://github.com/dillionverma/portfolio) (Magic UI, licença MIT — ver `LICENSE-template-magicui`).

## Editar o conteúdo

Todo o texto (sobre, experiência, fotos, formação, ferramentas e links) fica em `src/data/resume.tsx`.
Imagens ficam em `public/img/`.

## Rodar localmente

```bash
pnpm install
pnpm dev
```

## Publicar

O workflow `.github/workflows/deploy.yml` gera o site (`out/`) e publica no GitHub Pages a cada push na `main`.
Em **Settings → Pages**, a fonte precisa estar como **GitHub Actions**. O domínio vem de `public/CNAME`.
