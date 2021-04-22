# Support Engineer Code Challenge
## JS Challenge
A stack is a data structure that has some parallels with an array. Both have methods that
include push() and pop() . A stack, however, has the special LIFO property (Last In First
Out). Think of it as a stack of dishes. To take dishes o􀃠 of the stack, you grab the one on top
and remove it.
The following are common stack operations:
1. push: pushes a new element on top of a stack;
2. pop: removes the top element from a stack;
3. peek: takes the top element from a stack, but, unlike pop, doesn't remove the
element;
4. swap: swaps the position of the top two elements.
The given script performs these stack operations. The function is called stack() and
contains two parameters:
1. stackOperation : this parameter prescribes the stack operation, such as push and
pop.
2. stackValue : this parameter prescribes the item to be pushed on top of a stack. This
parameter is only useful when we want to push an item on the stack.
Our stack already contains some data:
```
storage : [
1,
'{id: 1,value: "obj"}',
"stringHolder",
46
]
```

Our operations would manipulate this stack, based on the stackOperation parameter.
However, the initial code doesn't function as described above. **Your task is to investigate
the code and fix the bugs**

## Python Challenge
You are about to go shopping for some candy in a local store. They sell candy for either $1 or
$2 a piece. You would like to know in how many unique ways you can purchase candy based
on the amount of money you have.
You have initially written a function buying_candy that takes an integer,
amount_of_money , and returns an integer that represents the number of unique ways to
buy candy. However, you notice that there are some bugs in your code. You now need to
debug it.
Note that if amount_of_money is 0 or negative, then the function buying_candy should
return 0.
Examples:
Input: amount_of_money = 2
Output: 2
1. $1 + $1
2. $2
Input: amount_of_money = 4
Output: 5
1. $1 + $1 + $1 + $1
2. $2 + $2
3. $2 + $1 + $1
4. $1 + $2 + $1
5. $1 + $1 + $2

## MySQL Challenge

You are working in a company with several locations worldwide. Your colleagues are from many different countries, and due to some international transfers, every office is very diverse in terms of cultural background, ethnicity, and language. In the NY office, for example, there are people from several states in the US, Mexico, Canada, Brazil, and the UK.
The company is growing rapidly, both in terms of staff per office and office expansions. The CEO is concerned that she cannot maintain the strong company culture throughout this phase of growth. She wants to make sure that there are experienced employees from across their international network in every existing office and in new offices. She calls these experienced employees "culture carriers".
Therefore, the CEO is looking for the complete list of countries and the number of culture carriers of each of those countries.
You are responsible for creating the SQL query. Take the following into consideration:

- The "culture carriers" are defined as employees with at least 1 year of working experience in at least one location.
- The employee table also contains employees that are no longer working for the company, so don't take them into consideration.
- Each employee has a country in the database, but this information is not mandatory; many of them have no country information in the database. In that case, use the country in which the employee is working.
- Take into account that an employee could be working in multiple offices. Regional Managers are a good example. They work from several (inter)national offices. For those employees, assign the employee to the country of the office in which they have been working the longest. And if their tenure is equal across 2 or more offices, assign them to the country with the lowest country ID.
- The CEO is also interested in the countries with zero employees.

#### Present the results as follows:
•	Show the name of the country and the number of culture carriers working there.
•	Order by number of employees, descending.
•	If two or more countries have the same number of culture carriers, order by country name (A-Z)
Just as an example, the result could be:
```
"United States", 126
"Canada", 45
"United Kingdom", 40
"Spain", 12
"Mexico", 10
"France", 2
"Germany", 2
"Italy", 0
"Japan", 0
```

In the company database, there is a country table with the relevant countries for the company:
•	The country of each office
•	The home country of (many) employees
•	The home country of customers
•	And potential countries to expand to

Review the following database structure to write your query:

```
CREATE TABLE country (
id integer primary key,   
 name varchar(50) not null
);
CREATE TABLE employee (
id integer primary key,   
first_name varchar(50) not null,  
last_name varchar(50),    
birth_date date,    
country_id integer,    
foreign key (country_id) 
references country(id) 
on delete SET NULL
);

CREATE TABLE working_center (
id integer primary key,    
name varchar(50) not null,  
address varchar(50),    
country_id integer,    
foreign key (country_id) 
references country(id) 
on delete SET NULL
);

CREATE TABLE employee_working_center (
employee_id integer,
working_center_id integer,    
start_date date,    
foreign key (employee_id) 
references employee(id) 
on delete CASCADE,    
foreign key (working_center_id) 
references working_center(id) 
on delete CASCADE);
```
CODE:
```
SELECT 
  c.name,
  count(*) as employees
FROM country c
group by c.name
```
