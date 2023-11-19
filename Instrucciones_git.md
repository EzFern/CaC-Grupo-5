# Flujo de trabajo con repositorio remoto

Clonar repositorio remoto por única vez:  
`git clone url_repo_remoto.git`

1. Actualizar informacion de ramas remotas:  
`git fetch`
2. Actualizar rama main local de main remoto:  
`git pull origin main`
3. Crear nueva rama local para tarea:  
`git checkout -b rama_tarea`
4. Editar algún archivo  
5. Agregar archivo modificado al seguimiento de git:  
`git add .`  
6. Confirmar y comentar cambio:  
`git commit -m "empece nueva tarea"`  
7. Editar otro archivo  
8. Agregar otro archivo modificado al seguimiento de git:  
`git add .`  
9. Confirmar y comentar nuevo cambio:  
`git commit -m "terminé la tarea"`  
10. Subir rama local a repositorio remoto:  
`git push origin -u rama_tarea`
11. Eliminar rama local de tarea:  
`git branch -d rama_tarea`