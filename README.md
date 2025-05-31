# Instruções para Execução do Site Portfólio Lumiert

Este documento contém instruções para executar o site portfólio Lumiert em ambiente de desenvolvimento e produção.

## Requisitos

- Docker e Docker Compose instalados
- Node.js e pnpm (opcional, apenas para desenvolvimento local sem Docker)

## Estrutura do Projeto

O projeto foi desenvolvido com:

- React.js com TypeScript
- React Router para navegação
- Tailwind CSS para estilização
- Framer Motion para animações
- Docker para containerização

## Executando o Projeto

### Ambiente de Desenvolvimento (com Hot Reload)

Para iniciar o ambiente de desenvolvimento com hot reload:

```bash
docker-compose up dev
```

O site estará disponível em `http://localhost:3000`

### Ambiente de Produção

Para construir e executar o site em modo de produção:

```bash
docker-compose up prod
```

O site estará disponível em `http://localhost:80`

### Desenvolvimento Local (sem Docker)

Se preferir desenvolver sem Docker:

1. Instale as dependências:
```bash
pnpm install
```

2. Inicie o servidor de desenvolvimento:
```bash
pnpm run dev
```

3. Para build de produção:
```bash
pnpm run build
```

## Características do Site

- **Estilo Brutalista**: Design direto, gráfico e com texturas
- **Identidade Visual Forte**: Paleta de cores com roxo, ciano e turquesa sobre fundo branco
- **Animações**: Transições suaves durante scroll com Framer Motion
- **Responsividade**: Layout adaptável para dispositivos móveis e desktop
- **Embeds**: Integração com SoundCloud, Spotify e YouTube
- **Links Externos**: Discord e WhatsApp

## Páginas

- **Home**: Manifesto artístico e apresentação visual impactante
- **Portfólio**: Embeds de músicas e vídeos de apresentações
- **Artes**: Galeria de produções visuais
- **Downloads**: Área para download de presets, samples e materiais
- **Comunidade**: Destaque para Discord com link direto
- **Contato**: Informações de contato com botão para WhatsApp

## Personalização

Para personalizar o conteúdo do site, você pode editar os arquivos nas seguintes pastas:

- `/src/pages/`: Conteúdo das páginas
- `/src/components/`: Componentes reutilizáveis
- `/src/styles/`: Estilos e design system
- `/public/`: Arquivos estáticos como imagens e favicons
