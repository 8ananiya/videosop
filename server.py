# server.py

from flask import Flask, request, redirect
import psycopg2

app = Flask(__name__)

# Connect to Postgres database
conn = psycopg2.connect(DATABASE_URL) 

@app.route('/signup', methods=['POST'])
def signup():
  # Get form data  
  name = request.form['name']
  email = request.form['email']
  password = request.form['password']
  
  # Save to database
  cur = conn.cursor()
  cur.execute("INSERT INTO users (name, email, password) VALUES (%s, %s, %s)", (name, email, password))
  conn.commit()
  
  return redirect('/')

if __name__ == '__main__':
  app.run()