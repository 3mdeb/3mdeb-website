# 3mdeb-website

## Deployment status

Production deploy status:

[![Build status](https://github.com/3mdeb/3mdeb-website/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/3mdeb/3mdeb-website/actions/workflows/deploy.yml)

Beta deploy status:

[![Build status](https://github.com/3mdeb/3mdeb-website/actions/workflows/deploy.yml/badge.svg?branch=develop)](https://github.com/3mdeb/3mdeb-website/actions/workflows/deploy.yml)

## Local preview

1. Run local server: `./scripts/local-preview.sh http://{IP-ADDRESS}`
1. Go to [http://{IP-ADDRESS}:1313/](http://localhost:1313/) to view the changes.

> _NOTE_: Using `localhost` could end in partial resource import, therefore try
to use the local IP address of the host machine. Feel free to replace
`http://localhost:1313` with desired address IP and port.
> _NOTE-2_: If you are having problems with docker (above script), use locally
> installed hugo:
>
> 1. Install hugo: `sudo snap install hugo`
> 2. Start local server: `hugo server`
> 3. Open locally deployed website on `localhost:1313`

## Good practices

### Development workflow

This repository uses `develop` -> `main` merge requirements. This provides
additional layer of control and verification in the beta/prod environment.

1. Whenever creating new branch for your changes, first, remember to checkout to
   up to date `develop` branch.
2. After pushing changes to your branch, set a Pull Request to `develop` branch,
   instead of `main`. Reporter will verify patch and publish beta env.
   * beta website: <https://beta.3mdeb.com/>
3. After successful deployment on the beta environment, if a whole set of
   patches is merged in the `develop` branch, open a new PR to `main`. The
   reporter will verify changes and publish prod env.
   * prod website: <https://3mdeb.com/>

> **NOTE**: If you forgot about rule Ad. 1, you can change the source branch
> by rebasing you branch: `git rebase --onto <new-parent> <old-parent>`. For
> example: `git rebase --onto develop main`.

### Broken links checker

Currently we are using [lychee](https://github.com/lycheeverse/lychee) a fast,
async, stream-based link checker written in Rust. The automatic check is
triggered on each push to the master pull request.

You can also run it locally using a docker image:

```bash
$ docker run --init -it --rm -w $(pwd) -v $(pwd):$(pwd) lycheeverse/lychee
    --max-redirects 10 -a 403,429,500,502,503,999 .
```

### Relative links

Please avoid using relative like:

```md
[contact](../../contact/)
```

Instead, use absolute links:

```md
[contact](https://3mdeb.com/contact/)
```

### pre-commit hooks

* [Install pre-commit](https://pre-commit.com/index.html#install), if you
  followed [local build](#local-preview) procedure `pre-commit` should be
  installed

* [Install go](https://go.dev/doc/install)

* Install hooks into repo:

```shell
pre-commit install --hook-type commit-msg
```

* Enjoy automatic checks on each `git commit` action!

* (Optional) Run hooks on all files (for example, when adding new hooks or
  configuring existing ones):

```shell
pre-commit run --all-files
```

#### To skip verification

In some cases, it may be needed to skip `pre-commit` tests. To do that, please
use:

```shell
git commit --no-verify
```

### Grammarly - a must have for content verification

Grammarly is a great, free tool for all bloggers and anyone who needs to write
documentation in English.
It will let you know if you skipped a coma or made a typo, as well, as it will
check advanced grammar mistakes, too. Bear in mind, that the free version has
its limits, so you need to keep an eye on it at all times and still, you are
the one who distinguishes when to use a/an or the, as it only suggests changes.

Two versions of Grammarly are available: a plugin for Chrome/Chromium or online
application. You need to create an account (it's for free) to be able to use
Grammarly.

Visit the website [Grammarly](https://app.grammarly.com/) and create an account.

>It is a MUST-HAVE application for anyone who writes posts or documentation, so
feel obliged to use it.

### Creating titles - Emotional Marketing Value Headline Analyzer

<https://www.aminstitute.com/headline/>

The free tool, which analyze headline to determine the Emotional Marketing Value
(EMV) score. Headline is analyzed and scored based on the total number
of EMV words it has in relation to the total number of words it contains. This
will determine the EMV score of headline. Most professional copywriters'
headlines will have 30%-40% EMV Words in their headlines, while the most gifted
copywriters will have 50%-75% EMV words in headlines.
