# scoop

10-second sports updates for busy fans

## tech stack

- Next.js
- Tailwind CSS
- Shadcn UI
- Create T3 App

## design resources

- [Magic Patterns](https://www.magicpatterns.com) - ai-powered design tool for rapid UI prototyping and component generation

### git configuration for multiple remotes

this repository is configured to push to two remote repositories simultaneously:

- [@adiadd/scoop-www](https://github.com/adiadd/scoop-www) (primary, where Vercel builds happen)
- [@agnilabs/scoop-www](https://github.com/agnilabs/scoop-www) (organization repo)

to set up your local repository to push to both remotes, run these commands:

```bash
# Set the primary remote URL (for both fetch and first push)
git remote set-url origin git@github.com:adiadd/scoop-www.git

# Add the second push URL
git remote set-url --add origin git@github.com:agnilabs/scoop-www.git
```

you can verify your configuration with:

```bash
git remote -v
```

this should show:

```
origin  git@github.com:adiadd/scoop-www.git (fetch)
origin  git@github.com:adiadd/scoop-www.git (push)
origin  git@github.com:agnilabs/scoop-www.git (push)
```

now when you run `git push origin main`, it will push to both repositories automatically.
