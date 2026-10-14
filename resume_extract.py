import PyPDF2

reader = PyPDF2.PdfReader(r'c:\Users\admin\OneDrive\Desktop\Portfolio\Yash_Shukla_Resume (1).pdf')
full_text = ""
for page in reader.pages:
    full_text += page.extract_text() + "\n"

with open(r'c:\Users\admin\OneDrive\Desktop\Portfolio\resume_content.txt', 'w', encoding='utf-8') as f:
    f.write(full_text)
print("Resume content saved to resume_content.txt")
