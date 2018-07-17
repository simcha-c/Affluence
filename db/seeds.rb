# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Team.destroy_all
TeamMembership.destroy_all

# Users
demo_user = User.create!(email: 'demo@bliss-ana.com', password: 'demo-password', first: 'Demo', last: 'Guest')
me = User.create!(email: 'simcha@bliss.com', password: 'password', first: 'Simcha', last: 'Cohen')
josh = User.create!(email: 'josh@bliss.com', password: 'password', first: 'Josh', last: 'J')
jess = User.create!(email: 'jess@bliss.com', password: 'password', first: 'Jess', last: 'J')
just = User.create!(email: 'justin@bliss.com', password: 'password', first: 'Justin', last: 'J')


# Teams
engineers = Team.create!(name: 'Engineering 101')
design = Team.create!(name: 'Design')
customer_service = Team.create!(name: 'Customer Service')
finance = Team.create!(name: 'Finance')

# Team Memberships
tm1 = TeamMembership.create!(team_id: engineers.id, user_id: jess.id, role: 'Manager', department: 'Beers on me', about_me: 'Using mathematics, scientific, and engineering principles to design, repair, and improve air and spacecraft, component parts, facilities, materials, safety regulations, and manufacturing processes.' )
tm2 = TeamMembership.create!(team_id: engineers.id, user_id: demo_user.id, role: 'Janitor', about_me: 'Make sure to do your part')
tm3 = TeamMembership.create!(team_id: design.id, user_id: demo_user.id, role: 'UI Designer', department: 'Forms!')
tm4 = TeamMembership.create!(team_id: design.id, user_id: me.id, role: 'Intern', department: 'Helping out', about_me: 'If anyone needs anything designed, let me know!')
tm5 = TeamMembership.create!(team_id: customer_service.id, user_id: demo_user.id, department: '', about_me: 'Focused on helping the team build necessary skills and knowledge so they can better support customers. Striving for a supportive, communicative, and attentive environment.')
tm6 = TeamMembership.create!(team_id: customer_service.id, user_id: me.id, role: 'Advisor', department: 'Change' , about_me: 'change this soon')
tm7 = TeamMembership.create!(team_id: customer_service.id, user_id: jess.id, role: 'Technician', department: 'Change' , about_me: 'change this soon')
tm8 = TeamMembership.create!(team_id: customer_service.id, user_id: josh.id, role: 'What up?', department: 'Change' , about_me: 'change this soon')
tm9 = TeamMembership.create!(team_id: finance.id, user_id: josh.id, role: 'Basketball Rules!', department: 'Change' , about_me: 'change this soon')
tm10 = TeamMembership.create!(team_id: finance.id, user_id: demo_user.id, role: 'Analyst', department: 'Change' , about_me: 'change this soon')
tm11 = TeamMembership.create!(team_id: finance.id, user_id: me.id, role: 'Planner', department: 'Change' , about_me: 'change this soon')
tm12 = TeamMembership.create!(team_id: finance.id, user_id: jess.id, role: 'Advisor', department: 'Change' , about_me: 'change this soon')
tm13 = TeamMembership.create!(team_id: finance.id, user_id: just.id, role: 'CEO', department: 'Change' , about_me: 'change this soon')


# Projects
design_plan = Project.create!(name: 'Sprint Plan', team_id: design.id)
brainstorm = Project.create!(name: 'Brainstorm', team_id: design.id)
design_model = Project.create!(name: 'Design Model', team_id: design.id)
review_model = Project.create!(name: 'Review Designed Model', team_id: design.id)
redesign = Project.create!(name: 'Redesign', team_id: design.id)

review = Project.create!(name: 'Review Designed Model', team_id: finance.id)
raise_funds = Project.create!(name: 'Raise funds', team_id: finance.id)
approve = Project.create!(name: 'Approve features', team_id: finance.id)

sprint_plan = Project.create!(name: 'Sprint Plan', team_id: engineers.id)
build = Project.create!(name: 'Build Model', team_id: engineers.id)
testing = Project.create!(name: 'Test Model', team_id: engineers.id)

training = Project.create!(name: 'Training for Model X', team_id: customer_service.id)
daily = Project.create!(name: 'Day to Day', team_id: customer_service.id)












#
