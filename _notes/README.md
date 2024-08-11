```
to update the monitor list

cd to project directory: /home/logic/\_workspace/logic-NUC8i5BEH-tryout/src/changedetect/new-changedetect

# stop docker
$ docker compose kill

# at project root
cd /home/logic/_workspace/logic-NUC8i5BEH-tryout/src/changedetect/new-changedetect
sudo chown 1000:1000 -R .


# update your csv
cd _notes
node ./generate.js
node ./update.js


# resume docker
$ docker compose up -d

```
