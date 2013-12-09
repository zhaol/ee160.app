# An App to Support EE160

## Notes
Start PostGreSQL on Cloud9:

    ../lib/pkg/postgresql-9.1.4/bin/postgres -h $IP -D ~/postgres-data &
    
or

    postgres -h $IP -D ~/postgres-data
    
or

    pg_ctl -h $IP -D ~/postgres-data -l logfile start

Set path for heroku-toolbelt

    cd heroku-client/bin

    PATH=$PATH:$PWD
