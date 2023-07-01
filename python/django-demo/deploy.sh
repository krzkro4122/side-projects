cd ~ 
. .virtualenv/djangoEnv/bin/activate

cd -
pip install -r requirements.txt

cd mysite
python manage.py migrate

python manage.py runserver
