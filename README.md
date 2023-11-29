# SymfonyCon 2023 Workshop: Having Fun & Being Productive with Symfony UX & AssetMapper

Well hi there! If you're attending the
[Having Fun & Being Productive with Symfony UX & AssetMapper](https://live.symfony.com/2023-brussels-con/workshop/having-fun-and-being-productive-with-symfony-ux-and-assetmapper)
workshop, then this is the code you're looking for!

## Setup

Please make sure you have this project downloaded & running before the workshop.
You can use whatever environment you want (Docker, etc) - but I'll recommend
(below) a setup where PHP is installed locally and Docker is used for the
database.

If you have any questions - you can message me on the Symfony Slack (`weaverryan`)
or email me at ryan@symfonycasts.com.

First, clone the repository and install the dependencies:

```
git clone git@github.com:weaverryan/sfcon_2023_ux_workshop.git
composer install
```

### Database Setup

The code comes with a `compose.yaml` file (for Docker) and we recommend using
Docker to boot a database container. You will still have PHP installed
locally, but you'll connect to a database inside Docker. This is optional,
but I think you'll love it!

First, make sure you have [Docker installed](https://docs.docker.com/get-docker/)
and running. To start the container, run:

```
docker compose up -d
```

Next, build the database and the schema with:

```
# "symfony console" is equivalent to "bin/console"
# but its aware of your database container
symfony console doctrine:database:create --if-not-exists
symfony console doctrine:schema:create
symfony console doctrine:fixtures:load
```

If you do *not* want to use Docker, just make sure to start your own
database server and update the `DATABASE_URL` environment variable in
`.env` or `.env.local` before running the commands above. Using `sqlite`
is a great option and will totally work.

### Start the Symfony web server

You can use Nginx or Apache, but Symfony's local web server
works even better.

To install the Symfony local web server, follow
"Downloading the Symfony client" instructions found
here: https://symfony.com/download - you only need to do this
once on your system.

Then, to start the web server, open a terminal, move into the
project, and run:

```
symfony serve
```

(If this is your first time using this command, you may see an
error that you need to run `symfony server:ca:install` first).

Now check out the site at `https://localhost:8000` It will look *super* basic
and ugly. That's ok! We're going to make it look awesome.

Have fun!
