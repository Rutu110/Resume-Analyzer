# https://rudratrivedi14-resume-match-resumescreeningappwebapp-lrgcd1.streamlit.app/


import streamlit as st 
import PyPDF2
import pdfplumber
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

st.title("Candidate Selection Tool")

st.subheader("NLP Based Resume Screening")

uploadedJD = st.file_uploader("Upload Job Description(This will requirements OR skills which will provided by company HR who is hiring for any role)", type="pdf")

uploadedResume = st.file_uploader("Upload resume(This is candidate's resume which will be mtched by JD of company)",type="pdf")

click = st.button("Process")



try:
    global job_description
    with pdfplumber.open(uploadedJD) as pdf:
        pages = pdf.pages[0]
        job_description = pages.extract_text()

except:
    st.write("")
    
    
try:
    global resume
    with  pdfplumber.open(uploadedResume) as pdf:
        pages = pdf.pages[0]
        resume = pages.extract_text()
except:
    st.write("")
    
#logic
def getResult(JD_txt,resume_txt):
    content = [JD_txt,resume_txt]

    cv = CountVectorizer()

    matrix = cv.fit_transform(content)

    similarity_matrix =  cosine_similarity(matrix)

    match = similarity_matrix[0][1] * 100

    return match


#button 

if click:
    match = getResult(job_description,resume)
    match = round(match,2)
    st.write("Match Percentage of Company requirements and Candidate's skill: ",match,"%")

st.caption(" ~ made by CP Department")
