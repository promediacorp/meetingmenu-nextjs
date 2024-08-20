import os
import random

# Function to create a random personal-sounding filename with appropriate extensions
def random_filename(extension):
    doc_filenames = [
        "My Income 2024", "Mom's Medicine List", "Private Diary", "Bank Statements",
        "Medical Records", "Tax Documents 2023", "Personal Budget", "Family Secrets",
        "Sensitive Information", "Confidential Notes", "Project Plans", "Love Letters",
        "Important Contacts", "Passwords", "Insurance Papers", "Job Applications",
        "Legal Documents", "School Records", "Work Performance Review", "Employee Records",
        "Client Information", "Investment Portfolio", "Retirement Plans", "Health Records",
        "Child's Report Card", "Pet's Medical Records", "Neighborhood Watch", "Community Meeting Notes",
        "Book Club List", "Legal Documents", "Financial Statements", "HR Policies", 
        "Meeting Minutes", "Strategic Plans", "Business Plans", "Research Papers"
    ]
    
    xls_filenames = [
        "Personal Budget", "Investment Portfolio", "Tax Calculations", "Business Financials",
        "Monthly Expenses", "Quarterly Earnings", "Yearly Savings Plan", "Expense Report",
        "Sales Data", "Employee Performance", "Inventory List", "Project Budget",
        "Client Billing", "Income Statement", "Balance Sheet", "Cash Flow",
        "Break-even Analysis", "Sales Forecast", "Cost Analysis", "Financial Projections"
    ]
    
    gif_filenames = [
        "Vacation Photos", "Johnny in the Bath", "Christmas Gifts", "Birthday Plans",
        "Wedding Plans", "Travel Itinerary", "Fitness Progress", "Pet's Medical Records",
        "Photo Album", "Family Reunion", "Holiday Celebration", "Summer Vacation",
        "Kids Playing", "Funny Moments", "Party Photos", "Nature Shots",
        "Beach Trip", "Camping Adventure", "Road Trip", "Graduation"
    ]
    
    pdf_filenames = [
        "Report Card", "Invoice 2023", "Contract Agreement", "Proposal", "Resume", 
        "Cover Letter", "White Paper", "Research Study", "Meeting Notes", "Manual",
        "Book Draft", "Lecture Notes", "Training Materials", "Presentation Slides",
        "Project Report", "Ebook", "Company Brochure", "Newsletter", "Catalog", "Blueprint"
    ]
    
    if extension == 'DOC':
        filename = random.choice(doc_filenames)
    elif extension == 'XLS':
        filename = random.choice(xls_filenames)
    elif extension == 'GIF':
        filename = random.choice(gif_filenames)
    elif extension == 'PDF':
        filename = random.choice(pdf_filenames)
    
    full_filename = f"{filename}.{extension.lower()}"
    return full_filename

# Function to create a specified number of files with a given extension
def create_files(num_files, extension, desktop_path):
    for _ in range(num_files):
        filename = random_filename(extension)
        filepath = os.path.join(desktop_path, filename)
        with open(filepath, 'w') as f:
            f.write("This is a non-empty file for testing purposes. It has some content to generate a preview icon.")  # Write some content to the file

# Get the number of files from the user
num_doc_files = int(input("Enter the number of random .DOC files to create: "))
num_xls_files = int(input("Enter the number of random .XLS files to create: "))
num_gif_files = int(input("Enter the number of random .GIF files to create: "))
num_pdf_files = int(input("Enter the number of random .PDF files to create: "))

# Set your desktop path
desktop_path = "/Users/aviw/Desktop"

# Create the files
create_files(num_doc_files, 'DOC', desktop_path)
create_files(num_xls_files, 'XLS', desktop_path)
create_files(num_gif_files, 'GIF', desktop_path)
create_files(num_pdf_files, 'PDF', desktop_path)

print(f"Created {num_doc_files} .DOC files, {num_xls_files} .XLS files, {num_gif_files} .GIF files, and {num_pdf_files} .PDF files on your desktop.")
