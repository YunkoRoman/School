Data Base migration 


create table classrooms
(
  id       int auto_increment
    primary key,
  chatId   varchar(500) not null,
  platform varchar(50)  null
);

create table lessons
(
  id          int auto_increment
    primary key,
  classroomId int          not null,
  subject     varchar(100) not null,
  url         varchar(500) not null,
  constraint lessons_classrooms_id_fk
  foreign key (classroomId) references classrooms (id)
);

create table teachers
(
  id                 int auto_increment
    primary key,
  name               varchar(100) null,
  surname            varchar(100) null,
  email              varchar(100) null,
  age                decimal      null,
  sex                varchar(20)  null,
  yearsOfExperience  decimal      null,
  workedInUniversity tinyint(1)   null,
  canTeach_Subject   varchar(100) not null
);

create table teacher_workhours
(
  id              int auto_increment
    primary key,
  teacher_id      int         not null,
  lesson_id       int         not null,
  timeStartLesson time        not null,
  timeEndLesson   time        not null,
  day             varchar(50) not null,
  constraint teacher_workhours_lessons_id_fk
  foreign key (lesson_id) references lessons (id),
  constraint teacher_workhours_teachers_id_fk
  foreign key (teacher_id) references teachers (id)
);

![image](https://user-images.githubusercontent.com/47313744/104229184-96dd3e80-5454-11eb-93ee-d798c83997c0.png)
![image](https://user-images.githubusercontent.com/47313744/104229197-9ba1f280-5454-11eb-8e4c-70991b67501c.png)
![image](https://user-images.githubusercontent.com/47313744/104229205-9e9ce300-5454-11eb-8c37-3d91e5161fb0.png)
![image](https://user-images.githubusercontent.com/47313744/104229216-a2306a00-5454-11eb-8caa-0f9ed4de6d44.png)
![image](https://user-images.githubusercontent.com/47313744/104354657-2f85c400-5512-11eb-9374-526c533008de.png)
Result function getTargetMathTeachers:

![image](https://user-images.githubusercontent.com/47313744/104229662-3ac6ea00-5455-11eb-8447-8d982f0fa539.png)
![image](https://user-images.githubusercontent.com/47313744/104229678-3f8b9e00-5455-11eb-85b7-7dcac713b3e0.png)


