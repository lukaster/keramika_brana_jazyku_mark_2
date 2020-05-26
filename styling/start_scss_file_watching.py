import os

sass_files=[
    "adults_styling","children_styling","footer_styling","index_styling","navbar_styling","teachers_styling"
]
for sass_file in sass_files:
    command_string = "sass --watch scss_styling\\" + sass_file + ".scss:generated_css\\" + sass_file +".css"
    print(command_string)
    os.system('start  cmd /k "'+command_string+'"')
