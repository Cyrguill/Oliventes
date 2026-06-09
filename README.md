# Oliventes website

Static bilingual landing page for Oliventes.

## Deploy with GitHub Pages

1. Create or open the GitHub repository for `oliventes.com`.
2. Upload the contents of this folder to the repository root.
3. In GitHub, go to Settings > Pages.
4. Set Source to `Deploy from a branch`.
5. Select branch `main` and folder `/root`.
6. Save.
7. Keep the `CNAME` file in the repo root so GitHub Pages uses `oliventes.com`.

## Domain DNS

At the domain registrar, point `oliventes.com` to GitHub Pages:

```text
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   <your-github-username>.github.io
```

Replace `<your-github-username>` with the GitHub account or organization that owns the repository.
