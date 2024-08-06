# Example deploy.sh
# Pull the latest Docker image
# docker pull tilak717/todo-app:$CIRCLE_SHA1

# # Stop and remove existing container
# docker stop todo-app || true
# docker rm todo-app || true

# # Run the new container
# docker run -d --name todo-app -p 80:80 tilak717/todo-app:$CIRCLE_SHA1


#No Need these command as config.yml contains this step,push and run the container