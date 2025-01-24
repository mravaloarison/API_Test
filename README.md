# API_Test

-   Preparation

```python

python -m venv {name of environment}

source {name of environment}/bin/activate

# install dependencies

# EXPORT API_KEY = jaskfaksl (before running the script)

# run script
flask run

```

-   Hide API KEY

```python
import os


API_KEY = os.getenv("API_KEY")
```
