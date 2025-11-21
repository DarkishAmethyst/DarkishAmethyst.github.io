import random

# Quiz data organized by topics
topics = {
    "Christian Beliefs": {
        "Trinity": "The belief that God exists as three persons in one - Father, Son and Holy Spirit",
        "Incarnation": "The belief that God became human in the form of Jesus Christ",
        "Atonement": "The reconciliation between God and humanity through Jesus' death on the cross",
        "Resurrection": "The belief that Jesus rose from the dead three days after his crucifixion",
        "Salvation": "Being saved from sin and its consequences and granted eternal life with God",
        "Original Sin": "The Christian belief that humans are born with a tendency to sin inherited from Adam and Eve",
        "Omnipotent": "The belief that God is all-powerful",
        "Omnibenevolent": "The belief that God is all-loving and infinitely good",
        "Omniscient": "The belief that God is all-knowing",
        "Grace": "The unconditional love and mercy given to humans by God",
        "Creation ex nihilo": "The belief that God created the universe out of nothing",
        "Agape": "Unconditional love - the highest form of love in Christianity",
        "Heaven": "A state of eternal happiness in the presence of God after death",
        "Hell": "Eternal separation from God - a state of punishment after death",
        "Purgatory": "A place of purification where souls are cleansed before entering heaven (Catholic belief)"
    },
    
    "Christian Practices": {
        "Baptism": "A sacrament using water symbolizing cleansing from sin and admission into the Church",
        "Eucharist": "A service celebrating the Last Supper where bread and wine represent Jesus' body and blood",
        "Liturgical worship": "Structured worship following a set pattern like Mass",
        "Non-liturgical worship": "Informal worship without a set structure, more spontaneous",
        "Prayer": "Communicating with God through words or silence",
        "Pilgrimage": "A journey to a holy place for spiritual reasons",
        "Christmas": "Christian festival celebrating the birth of Jesus",
        "Easter": "Christian festival celebrating the resurrection of Jesus",
        "Confirmation": "A sacrament where believers affirm their faith and receive the Holy Spirit",
        "The Lord's Prayer": "The prayer Jesus taught his disciples, considered the model prayer",
        "Reconciliation": "The sacrament of confession and receiving God's forgiveness (Catholic)",
        "Street Pastors": "Christian volunteers who patrol streets helping vulnerable people at night",
        "Food banks": "Places where Christians collect and distribute food to those in need",
        "Persecution": "Hostility and ill-treatment because of religious beliefs"
    },
    
    "Buddhist Beliefs": {
        "Dukkha": "Suffering or unsatisfactoriness - the first Noble Truth",
        "Anicca": "Impermanence - the belief that everything is constantly changing",
        "Anatta": "No fixed self or soul - there is no permanent unchanging essence",
        "Nibbana/Nirvana": "The ultimate goal of Buddhism - liberation from suffering and the cycle of rebirth",
        "Samsara": "The cycle of birth, death and rebirth",
        "Karma": "The law of cause and effect - actions have consequences in this life and future lives",
        "The Four Noble Truths": "Buddha's teaching about suffering, its cause, its end, and the path to end it",
        "The Noble Eightfold Path": "The Buddha's practical guidelines for ending suffering",
        "The Three Refuges": "Taking refuge in the Buddha, Dhamma and Sangha",
        "Tanha": "Craving or desire - the cause of suffering according to the Second Noble Truth",
        "The Middle Way": "Avoiding extremes of self-indulgence and self-denial",
        "Metta": "Loving kindness - goodwill towards all beings",
        "Compassion (Karuna)": "Deep concern for the suffering of others and desire to help",
        "Dependent Arising": "The teaching that everything arises dependent on conditions",
        "Rebirth": "Being born again into a new life after death based on karma"
    },
    
    "Buddhist Practices": {
        "Meditation": "Mental training to develop awareness, concentration and insight",
        "Samatha meditation": "Calm meditation focusing on breathing or an object to develop concentration",
        "Vipassana meditation": "Insight meditation to see the true nature of reality",
        "The Five Precepts": "Basic ethical guidelines for Buddhists - no killing, stealing, sexual misconduct, lying, or intoxicants",
        "Wesak/Vesak": "Buddhist festival celebrating the birth, enlightenment and death of Buddha",
        "Puja": "Worship or devotional practice involving offerings, chanting and meditation",
        "Offerings": "Giving flowers, incense, candles or food at shrines to show respect",
        "Mantras": "Sacred sounds or phrases repeated during meditation or worship",
        "Mala beads": "Prayer beads used to count mantras or breaths during meditation",
        "Buddhist shrine": "Sacred space with Buddha image for worship and meditation",
        "Dana": "Generosity or giving - especially giving to monks or those in need",
        "Sangha": "The Buddhist community of monks, nuns and lay followers",
        "Vinaya": "The code of discipline for Buddhist monks and nuns",
        "Mindfulness": "Being fully present and aware in the current moment",
        "Right Action": "Part of the Eightfold Path - acting ethically and avoiding harm"
    },
    
    "Christian Beliefs Extra": {
        "Ascension": "Jesus rising to heaven 40 days after his resurrection",
        "Pentecost": "When the Holy Spirit descended on Jesus' disciples",
        "Apostles' Creed": "A statement of Christian beliefs used in worship",
        "Sin": "Actions or thoughts that go against God's will",
        "Redemption": "Being saved from sin through Jesus' sacrifice",
        "Blasphemy": "Speaking disrespectfully about God or sacred things",
        "Miracle": "An extraordinary event believed to be the work of God"
    },
    
    "Buddhist Beliefs Extra": {
        "The Three Marks of Existence": "Dukkha, Anicca and Anatta - fundamental characteristics of reality",
        "Right Understanding": "First step of the Eightfold Path - understanding the Four Noble Truths",
        "Right Intention": "Second step - commitment to ethical conduct and developing wisdom",
        "Enlightenment": "Awakening to the true nature of reality and achieving freedom from suffering",
        "Bodhisattva": "Someone who delays their own nirvana to help others achieve enlightenment",
        "Pure Land": "A heavenly realm where rebirth is easier to achieve enlightenment (Mahayana belief)",
        "Skilful action": "Actions that lead away from suffering and towards enlightenment"
    }
}

def create_question_pool(selected_religion=None):
    """Create questions from selected religion or both"""
    questions = []
    for topic_name, terms in topics.items():
        # Filter by religion if specified
        if selected_religion == "christianity" and "Christian" not in topic_name:
            continue
        if selected_religion == "buddhism" and "Buddhist" not in topic_name:
            continue
            
        for term, definition in terms.items():
            questions.append({
                'topic': topic_name,
                'term': term,
                'correct_answer': definition
            })
    return questions

def get_wrong_answers(all_questions, current_question, num_wrong=3):
    """Get random wrong answers"""
    wrong_answers = []
    available = [q for q in all_questions if q['term'] != current_question['term']]
    
    selected = random.sample(available, num_wrong)
    for q in selected:
        wrong_answers.append(q['correct_answer'])
    
    return wrong_answers

def run_quiz():
    print("=" * 60)
    print("RELIGIOUS STUDIES QUIZ - EDUQAS STYLE")
    print("=" * 60)
    
    # Religion selection
    print("\nwhats ur vibe today:")
    print("1. christianity only")
    print("2. buddhism only")
    print("3. mix both religions (absolute chaos)")
    
    religion_choice = input("\nenter number: ")
    
    religion_filter = None
    if religion_choice == "1":
        religion_filter = "christianity"
        print("\nchristian mode activated")
    elif religion_choice == "2":
        religion_filter = "buddhism"
        print("\nbuddhist mode activated")
    else:
        print("\nmixed mode lets goooo")
    
    all_questions = create_question_pool(religion_filter)
    random.shuffle(all_questions)
    
    print(f"\n\nyou got {len(all_questions)} questions to get through")
    print("get them ALL right to escape this quiz\n")
    input("press enter when ur ready to suffer...")
    
    correct_count = 0
    question_num = 0
    
    while question_num < len(all_questions):
        current_q = all_questions[question_num]
        
        print("\n" + "=" * 60)
        print(f"question {question_num + 1}/{len(all_questions)}")
        print(f"topic: {current_q['topic']}")
        print("=" * 60)
        print(f"\nwhats the definition of: {current_q['term']}?\n")
        
        # Create multiple choice
        options = [current_q['correct_answer']] + get_wrong_answers(all_questions, current_q)
        random.shuffle(options)
        
        for i, option in enumerate(options, 1):
            print(f"{i}. {option}\n")
        
        try:
            answer = int(input("ur answer (1-4): "))
            chosen = options[answer - 1]
            
            if chosen == current_q['correct_answer']:
                print("\n✓ CORRECT moving on")
                correct_count += 1
                question_num += 1
            else:
                print(f"\n✗ WRONG u said: {chosen}")
                print(f"\ncorrect answer: {current_q['correct_answer']}")
                print("\nTRY AGAIN ur stuck on this one")
                input("\npress enter to retry...")
        except:
            print("\ninvalid input mate try again")
    
    print("\n" + "=" * 60)
    print("QUIZ COMPLETE YOURE FREE")
    print("=" * 60)
    print(f"u got {correct_count} right first time")
    print("now go pass that exam or whatever")

if __name__ == "__main__":
    run_quiz()
const { useState } = React;
ReactDOM.render(<ReligiousQuizApp />, document.getElementById('quiz-root'));
