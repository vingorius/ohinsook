#DEBUG=ohinsook:* npm start
#DEBUG=ohinsook:* nodemon bin/www


export NODE_ENV=production
# Forever As Superuser
PORT=3000 forever start  --minUptime 1000 --spinSleepTime 1000 \
               --uid "vingorius" -l "/tmp/ohinsook.log" --append \
               -c "/usr/local/bin/nodemon -c routes" bin/www

