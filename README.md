Install dependencies: pip3 install -r requirements.txt
Set flask env variable powershell: $env:FLASK_APP = "application.py"
Linux: export FLASK_APP=application.py
Also set DB URL as env var: export DATABASE_URL="your_database/url/path"