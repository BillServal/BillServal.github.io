const catData = [
    {
        name: "วิเชียรมาศ",
        image: "https://i.ibb.co/5hhjSk34/Siamese-2.jpg",
        description: "แมวไทยโบราณที่รักสงบและเป็นมิตร มีแต้มสีเข้มที่ปลายหู หน้า ขา และหาง ซึ่งทำให้เป็นที่รู้จักกันในชื่อ 'แมว 9 แต้ม' นิสัยดี ฉลาด และเข้ากับคนในครอบครัวได้ดี",
        timeRequirement: "high",
        spaceRequirement: "medium",
        careLevel: "easy",
        origin: "ประเทศไทย",
        temperament: "รักสงบ, ขี้อ้อน, เป็นมิตร",
        age: "12 - 15 ปี",
        cautions: "ไม่มีข้อควรระวังพิเศษ เหมาะสำหรับมือใหม่",
        price: 8000,
        interaction: "seeking",
        mischievousness: "low",
        furAllergy: "no",
        meowRate: "medium",
        experienceLevel: "beginner",
        temperatureTolerance: "warm"
    },
    {
        name: "สก็อตติช โฟลด์",
        image: "https://i.ibb.co/5Xbck1Vs/images-1.jpg",
        description: "แมวหูพับที่โดดเด่นด้วยใบหูที่พับลงไปข้างหน้า มีนิสัยน่ารัก ขี้อ้อน และปรับตัวเข้ากับสภาพแวดล้อมใหม่ได้ง่าย เป็นแมวที่ไม่ค่อยร้องเสียงดัง และชอบอยู่ใกล้ชิดกับเจ้าของ",
        timeRequirement: "low",
        spaceRequirement: "small",
        careLevel: "easy",
        origin: "สก็อตแลนด์",
        temperament: "อ่อนโยน, น่ารัก, ปรับตัวง่าย",
        age: "11 - 14 ปี",
        cautions: "มีปัญหาเกี่ยวกับข้อต่อได้ง่าย ควรระวังเรื่องน้ำหนัก",
        price: 35000,
        interaction: "seeking",
        mischievousness: "low",
        furAllergy: "no",
        meowRate: "low",
        experienceLevel: "beginner",
        temperatureTolerance: "cool"
    },
    {
        name: "เปอร์เซีย",
        image: "https://i.ibb.co/nqZ6vTh9/Kemra2.jpg",
        description: "แมวขนยาวที่มีใบหน้ากลมแบน นิสัยเรียบร้อยและสงบ ไม่ค่อยชอบความวุ่นวาย ต้องการการแปรงขนทุกวันเพื่อป้องกันขนพันกัน เหมาะสำหรับผู้ที่สามารถดูแลขนของมันได้อย่างสม่ำเสมอ",
        timeRequirement: "medium",
        spaceRequirement: "small",
        careLevel: "hard",
        origin: "อิหร่าน",
        temperament: "รักสงบ, นิ่ง, อ่อนโยน",
        age: "15 - 20 ปี",
        cautions: "ต้องการการแปรงขนทุกวันเพื่อป้องกันขนเป็นสังกะตัง",
        price: 15000,
        interaction: "seeking",
        mischievousness: "low",
        furAllergy: "no",
        meowRate: "low",
        experienceLevel: "experienced",
        temperatureTolerance: "cool"
    },
    {
        name: "อเมริกัน ชอร์ตแฮร์",
        image: "https://i.ibb.co/F4Czds2c/IMG-1738850887-6232.jpg",
        description: "แมวสายพันธุ์อเมริกาที่มีลำตัวใหญ่และแข็งแรง นิสัยร่าเริง ฉลาด และเป็นนักล่าที่ดี เป็นแมวที่เล่นเก่งและชอบสำรวจ เหมาะสำหรับครอบครัวที่มีเด็กหรือสัตว์เลี้ยงอื่น ๆ",
        timeRequirement: "medium",
        spaceRequirement: "large",
        careLevel: "medium",
        origin: "สหรัฐอเมริกา",
        temperament: "ร่าเริง, ฉลาด, ขี้เล่น",
        age: "15 - 20 ปี",
        cautions: "ควรระวังเรื่องน้ำหนักเกิน เนื่องจากชอบกินและไม่ค่อยได้ออกกำลังกาย",
        price: 18000,
        interaction: "initiating",
        mischievousness: "medium",
        furAllergy: "no",
        meowRate: "low",
        experienceLevel: "beginner",
        temperatureTolerance: "warm"
    },
    {
        name: "บริติช ชอร์ตแฮร์",
        image: "https://i.ibb.co/Fbddhq3Q/bp-lot-2-british-shorthair-color-human.png",
        description: "แมวอ้วนกลมที่มีขนสั้นหนาแน่นและใบหน้ากลม นิสัยนิ่งๆ ไม่ค่อยซน และมีความอดทนสูง เป็นแมวที่ชอบอยู่เงียบๆ และไม่ต้องการความสนใจจากเจ้าของมากนัก",
        timeRequirement: "low",
        spaceRequirement: "small",
        careLevel: "medium",
        origin: "สหราชอาณาจักร",
        temperament: "สงบ, อดทน, ไม่ค่อยซน",
        age: "12 - 16 ปี",
        cautions: "อาจมีแนวโน้มเป็นโรคหัวใจและโรคอ้วนได้ ควรควบคุมอาหาร",
        price: 35000,
        interaction: "seeking",
        mischievousness: "low",
        furAllergy: "no",
        meowRate: "low",
        experienceLevel: "beginner",
        temperatureTolerance: "warm"
    },
    {
        name: "แร็กดอลล์",
        image: "https://i.ibb.co/tM2snq4f/4106765-65f54fdc4493f-big.jpg",
        description: "แมวตัวใหญ่ที่ตัวจะอ่อนปวกเปียกเหมือนตุ๊กตาเมื่อถูกอุ้ม นิสัยอ่อนโยนและขี้เล่น ชอบอยู่ใกล้ชิดกับคนในครอบครัว",
        timeRequirement: "medium",
        spaceRequirement: "medium",
        careLevel: "medium",
        origin: "สหรัฐอเมริกา",
        temperament: "อ่อนโยน, ขี้เล่น, เป็นมิตร",
        age: "12 - 17 ปี",
        cautions: "ต้องการการแปรงขนอย่างสม่ำเสมอเพื่อป้องกันขนพันกัน",
        price: 45000,
        interaction: "seeking",
        mischievousness: "low",
        furAllergy: "no",
        meowRate: "low",
        experienceLevel: "beginner",
        temperatureTolerance: "cool"
    },
    {
        name: "สฟิงซ์",
        image: "https://i.ibb.co/v09GqW4/l-9cajjehb687d76h6bcdeg-1.jpg",
        description: "แมวไร้ขนที่โดดเด่นด้วยผิวหนังย่นๆ มีนิสัยร่าเริง ชอบแสดงความรัก และเป็นมิตรมาก ต้องการการดูแลผิวหนังเป็นพิเศษ",
        timeRequirement: "high",
        spaceRequirement: "small",
        careLevel: "hard",
        origin: "แคนาดา",
        temperament: "ร่าเริง, ขี้อ้อน, ซุกซน",
        age: "8 - 14 ปี",
        cautions: "ต้องอาบน้ำเป็นประจำเพื่อทำความสะอาดผิวหนัง และต้องดูแลอุณหภูมิร่างกายไม่ให้หนาวเกินไป",
        price: 60000,
        interaction: "initiating",
        mischievousness: "high",
        furAllergy: "yes",
        meowRate: "medium",
        experienceLevel: "experienced",
        temperatureTolerance: "warm"
    },
    {
        name: "เมนคูน",
        image: "https://i.ibb.co/gM774ThS/46.png",
        description: "แมวบ้านที่มีขนาดใหญ่ที่สุดในโลก มีนิสัยอ่อนโยน ฉลาด และชอบการผจญภัย ชอบเล่นกับน้ำ และเข้ากับเด็กและสัตว์เลี้ยงอื่นๆ ได้ดี",
        timeRequirement: "medium",
        spaceRequirement: "large",
        careLevel: "medium",
        origin: "สหรัฐอเมริกา",
        temperament: "อ่อนโยน, ฉลาด, ขี้เล่น",
        age: "12 - 15 ปี",
        cautions: "อาจมีแนวโน้มเป็นโรคหัวใจและสะโพก dysplasia ได้",
        price: 50000,
        interaction: "initiating",
        mischievousness: "medium",
        furAllergy: "no",
        meowRate: "low",
        experienceLevel: "experienced",
        temperatureTolerance: "cool"
    },
    {
        name: "ซาวันนาห์",
        image: "https://i.ibb.co/tMnc6pdP/181-3.jpg",
        description: "เป็นแมวลูกผสมระหว่างแมวบ้านและเซอร์วัล มีรูปร่างสูงเพรียว มีพลังงานสูง ชอบการผจญภัยและปีนป่าย",
        timeRequirement: "high",
        spaceRequirement: "large",
        careLevel: "hard",
        origin: "สหรัฐอเมริกา",
        temperament: "ชอบผจญภัย, ฉลาด, มีพลังงานสูง",
        age: "12 - 20 ปี",
        cautions: "เป็นแมวที่ต้องการพื้นที่และกิจกรรมมาก อาจไม่เหมาะกับการเลี้ยงในอพาร์ตเมนต์",
        price: 100000,
        interaction: "initiating",
        mischievousness: "high",
        furAllergy: "no",
        meowRate: "medium",
        experienceLevel: "experienced",
        temperatureTolerance: "warm"
    },
    {
        name: "เบงกอล",
        image: "https://i.ibb.co/ZRf3Xd1g/Content-Breed-bengal-690-390-2.jpg",
        description: "มีลวดลายคล้ายเสือดาว มีนิสัยขี้เล่น ฉลาด และมีความกระตือรือร้นสูง ชอบเล่นน้ำ",
        timeRequirement: "high",
        spaceRequirement: "large",
        careLevel: "medium",
        origin: "สหรัฐอเมริกา",
        temperament: "ขี้เล่น, ฉลาด, มีชีวิตชีวา",
        age: "12 - 16 ปี",
        cautions: "เป็นแมวที่มีพลังงานสูงมาก ต้องการการออกกำลังกายและกิจกรรมเยอะๆ",
        price: 40000,
        interaction: "initiating",
        mischievousness: "high",
        furAllergy: "no",
        meowRate: "high",
        experienceLevel: "experienced",
        temperatureTolerance: "cool",
        mischievousness: "high",
        furAllergy: "no",
        meowRate: "high",
        experienceLevel: "experienced",
        temperatureTolerance: "warm"
    },
    {
        name: "อะบิสซิเนียน",
        image: "https://i.ibb.co/35cPYJTK/Abyssinian-1.jpg",
        description: "มีรูปร่างเพรียวสง่า มีขนสั้น นิสัยขี้เล่น ฉลาด และอยากรู้อยากเห็น ชอบสำรวจ",
        timeRequirement: "high",
        spaceRequirement: "medium",
        careLevel: "easy",
        origin: "เอธิโอเปีย",
        temperament: "ขี้เล่น, ฉลาด, อยากรู้อยากเห็น",
        age: "12 - 15 ปี",
        cautions: "อาจมีแนวโน้มเป็นโรคไตและโรคทางพันธุกรรมบางชนิด",
        price: 28000,
        interaction: "initiating",
        mischievousness: "high",
        furAllergy: "no",
        meowRate: "high",
        experienceLevel: "experienced",
        temperatureTolerance: "warm"
    },
    {
        name: "ไซบีเรียน",
        image: "https://i.ibb.co/G3JbZcGM/shutterstock-545113687.jpg",
        description: "มีขนหนาสองชั้นเพื่อทนต่อสภาพอากาศที่หนาวเย็น นิสัยเป็นมิตรและขี้เล่น ชอบน้ำ",
        timeRequirement: "medium",
        spaceRequirement: "large",
        careLevel: "medium",
        origin: "รัสเซีย",
        temperament: "เป็นมิตร, ขี้เล่น, อ่อนโยน",
        age: "11 - 15 ปี",
        cautions: "ขนหนาอาจต้องการการแปรงขนบ่อยขึ้นในช่วงผลัดขน",
        price: 32000,
        interaction: "seeking",
        mischievousness: "medium",
        furAllergy: "yes",
        meowRate: "low",
        experienceLevel: "experienced",
        temperatureTolerance: "cool"
    },
    {
        name: "เบอร์มีส",
        image: "https://i.ibb.co/3yr1K9Dy/istockphoto-1255591795-612x612.jpg",
        description: "แมวขนสั้นที่มีสีน้ำตาลเข้ม มีนิสัยขี้เล่น ฉลาด และเป็นมิตรกับคนและสัตว์เลี้ยงอื่นๆ",
        timeRequirement: "medium",
        spaceRequirement: "medium",
        careLevel: "easy",
        origin: "พม่า",
        temperament: "ขี้เล่น, ฉลาด, เป็นมิตร",
        age: "16 - 18 ปี",
        cautions: "อาจมีปัญหาสุขภาพเกี่ยวกับเบาหวาน",
        price: 20000,
        interaction: "seeking",
        mischievousness: "medium",
        furAllergy: "no",
        meowRate: "medium",
        experienceLevel: "beginner",
        temperatureTolerance: "warm"
    },
    {
        name: "เอ็กโซติก ชอร์ตแฮร์",
        image: "https://i.ibb.co/5Wx0PSmf/Exotic-Shorthair-1.jpg",
        description: "มีรูปร่างหน้าตาคล้ายเปอร์เซียแต่มีขนสั้น นิสัยรักสงบและเป็นมิตร",
        timeRequirement: "medium",
        spaceRequirement: "small",
        careLevel: "easy",
        origin: "สหรัฐอเมริกา",
        temperament: "รักสงบ, อ่อนโยน, เป็นมิตร",
        age: "12 - 15 ปี",
        cautions: "ควรระวังปัญหาสุขภาพเกี่ยวกับระบบทางเดินหายใจและตา",
        price: 25000,
        interaction: "seeking",
        mischievousness: "low",
        furAllergy: "no",
        meowRate: "low",
        experienceLevel: "beginner",
        temperatureTolerance: "cool"
    },
    {
        name: "ฮิมาลายัน",
        image: "https://i.ibb.co/1GqGSk5b/shutterstock-1123128137.jpg",
        description: "เป็นแมวลูกผสมระหว่างเปอร์เซียและสยาม มีขนยาวและแต้มสีคล้ายแมวสยาม นิสัยรักสงบ",
        timeRequirement: "high",
        spaceRequirement: "small",
        careLevel: "hard",
        origin: "สหรัฐอเมริกา",
        temperament: "รักสงบ, นิ่ง, อ่อนโยน",
        age: "12 - 15 ปี",
        cautions: "ต้องการการแปรงขนทุกวันเพื่อป้องกันขนพันกัน",
        price: 18000,
        interaction: "seeking",
        mischievousness: "low",
        furAllergy: "no",
        meowRate: "low",
        experienceLevel: "experienced",
        temperatureTolerance: "cool"
    },
    {
        name: "ชาร์เทรอ",
        image: "https://i.ibb.co/k6KYYq0H/215chatreuxlayingdown.jpg",
        description: "มีขนสีเทาฟ้าสั้นและหนาแน่น มีนิสัยนิ่ง สงบ และชอบอยู่เงียบๆ เหมาะสำหรับผู้ที่ต้องการแมวที่ไม่วุ่นวาย",
        timeRequirement: "low",
        spaceRequirement: "small",
        careLevel: "easy",
        origin: "ฝรั่งเศส",
        temperament: "สงบ, เงียบ, อดทน",
        age: "12 - 15 ปี",
        cautions: "ไม่มีข้อควรระวังพิเศษ",
        price: 25000,
        interaction: "seeking",
        mischievousness: "low",
        furAllergy: "no",
        meowRate: "low",
        experienceLevel: "beginner",
        temperatureTolerance: "cool"
    },
    {
        name: "เบอร์มิลล่า",
        image: "https://i.ibb.co/vtdxQXd/1383717192-o.jpg",
        description: "เป็นลูกผสมระหว่างเบอร์มีสและชินชิลล่า มีนิสัยขี้เล่นและอ่อนโยน",
        timeRequirement: "medium",
        spaceRequirement: "medium",
        careLevel: "easy",
        origin: "สหราชอาณาจักร",
        temperament: "ขี้เล่น, อ่อนโยน, เป็นมิตร",
        age: "10 - 15 ปี",
        cautions: "เป็นแมวที่รักความสะอาด ควรดูแลกะบะทรายให้ดี",
        price: 22000,
        interaction: "initiating",
        mischievousness: "medium",
        furAllergy: "no",
        meowRate: "medium",
        experienceLevel: "beginner",
        temperatureTolerance: "warm"
    },
    {
        name: "ซิงกาปูรา",
        image: "https://i.ibb.co/WNjhtKtx/singapura-cats-and-kittens-51.jpg",
        description: "แมวตัวเล็กที่สุดในโลก มีนิสัยร่าเริงและซุกซน ชอบเข้าสังคมกับคนและสัตว์อื่นๆ",
        timeRequirement: "high",
        spaceRequirement: "small",
        careLevel: "easy",
        origin: "สิงคโปร์",
        temperament: "ร่าเริง, ซุกซน, ชอบเข้าสังคม",
        age: "11 - 15 ปี",
        cautions: "ตัวเล็กและบอบบาง ควรระวังเรื่องการบาดเจ็บ",
        price: 30000,
        interaction: "initiating",
        furAllergy: "no",
        meowRate: "medium",
        experienceLevel: "beginner",
        temperatureTolerance: "warm"
    },
    {
        name: "คอร์นิช เร็กซ์",
        image: "https://i.ibb.co/FLp7jSmb/bc25bl-hub-cornish-rex-adult-standing.png",
        description: "แมวที่มีขนหยิกเป็นลอนคล้ายกำมะหยี่ มีรูปร่างเพรียวสง่าและมีนิสัยขี้เล่น",
        timeRequirement: "high",
        spaceRequirement: "medium",
        careLevel: "medium",
        origin: "สหราชอาณาจักร",
        temperament: "ขี้เล่น, ซุกซน, ฉลาด",
        age: "12 - 16 ปี",
        cautions: "ผิวหนังไวต่อแสงแดด ควรระวังไม่ให้โดนแดดจัด",
        price: 28000,
        interaction: "initiating",
        furAllergy: "yes",
        meowRate: "high",
        experienceLevel: "experienced",
        temperatureTolerance: "warm"
    },
    {
        name: "อเมริกัน เคิร์ล",
        image: "https://i.ibb.co/Lz9j2wPc/shutterstock-72002977.jpg",
        description: "มีหูที่ม้วนไปด้านหลัง เป็นแมวที่ขี้เล่น ฉลาด และปรับตัวเข้ากับครอบครัวได้ง่าย",
        timeRequirement: "medium",
        spaceRequirement: "medium",
        careLevel: "easy",
        origin: "สหรัฐอเมริกา",
        temperament: "ขี้เล่น, ฉลาด, ปรับตัวง่าย",
        age: "12 - 16 ปี",
        cautions: "หูที่ม้วนต้องได้รับการดูแลอย่างระมัดระวังเพื่อป้องกันการบาดเจ็บ",
        price: 18000,
        interaction: "seeking",
        mischievousness: "medium",
        furAllergy: "no",
        meowRate: "medium",
        experienceLevel: "beginner",
        temperatureTolerance: "warm"
    },
    {
        name: "โอเรียนทัล ชอร์ตแฮร์",
        image: "https://i.ibb.co/Qj1JBCjS/shutterstock-2198565497.jpg",
        description: "มีรูปร่างเพรียวสง่าและมีสีขนที่หลากหลาย นิสัยชอบพูดคุยและแสดงความรักกับเจ้าของ",
        timeRequirement: "high",
        spaceRequirement: "small",
        careLevel: "medium",
        origin: "สหราชอาณาจักร",
        temperament: "ชอบพูดคุย, ขี้อ้อน, มีชีวิตชีวา",
        age: "10 - 15 ปี",
        cautions: "เป็นแมวที่ต้องการความสนใจจากเจ้าของมาก",
        price: 25000,
        interaction: "initiating",
        mischievousness: "high",
        furAllergy: "no",
        meowRate: "high",
        experienceLevel: "beginner",
        temperatureTolerance: "warm"
    },
    {
        name: "แจแปนนิส บ็อบเทล",
        image: "https://i.ibb.co/pvVc32Pg/shutterstock-469403642.jpg",
        description: "มีหางสั้นและมีลักษณะเฉพาะ มีนิสัยฉลาด ขี้เล่น และปรับตัวเข้ากับสภาพแวดล้อมได้ดี",
        timeRequirement: "medium",
        spaceRequirement: "medium",
        careLevel: "easy",
        origin: "ญี่ปุ่น",
        temperament: "ฉลาด, ขี้เล่น, เป็นมิตร",
        age: "15 - 18 ปี",
        cautions: "เป็นแมวที่ชอบสื่อสารด้วยเสียง ควรเตรียมใจ",
        price: 20000,
        interaction: "seeking",
        mischievousness: "medium",
        furAllergy: "no",
        meowRate: "high",
        experienceLevel: "beginner",
        temperatureTolerance: "warm"
    },
    {
        name: "แมนซ์",
        image: "https://i.ibb.co/pjbRZZP7/On4-Il-NBDF2l-T6-Od-Dk1-H5ig4-Ufz12iw-Xt2-IXPCvlv.jpg",
        description: "มีลักษณะเด่นคือไม่มีหาง นิสัยอ่อนโยนและขี้เล่น ชอบการปีนป่ายและสำรวจ",
        timeRequirement: "medium",
        spaceRequirement: "large",
        careLevel: "easy",
        origin: "เกาะแมน",
        temperament: "อ่อนโยน, ขี้เล่น, ฉลาด",
        age: "14 - 16 ปี",
        cautions: "อาจมีปัญหาสุขภาพที่เรียกว่า Manx Syndrome",
        price: 15000,
        interaction: "initiating",
        mischievousness: "medium",
        furAllergy: "no",
        meowRate: "low",
        experienceLevel: "experienced",
        temperatureTolerance: "cool"
    },
    {
        name: "รัสเซียนบลู",
        image: "https://i.ibb.co/FqVTSstq/shutterstock-616248851.jpg",
        description: "มีขนสีเทาเงินหนาแน่นและดวงตาสีเขียวสดใส นิสัยรักสงบ ชอบความสะอาดและเป็นมิตรกับเจ้าของ",
        timeRequirement: "low",
        spaceRequirement: "small",
        careLevel: "easy",
        origin: "รัสเซีย",
        temperament: "รักสงบ, ขี้อาย, ชอบอยู่เงียบๆ",
        age: "15 - 20 ปี",
        cautions: "เป็นแมวขี้อาย ควรให้เวลาในการปรับตัว",
        price: 25000,
        interaction: "seeking",
        mischievousness: "low",
        furAllergy: "yes",
        meowRate: "low",
        experienceLevel: "beginner",
        temperatureTolerance: "cool"
    },
    {
        name: "บาหลี",
        image: "https://i.ibb.co/h11NrhtC/190c071097304903b36831b66e8c1288.jpg",
        description: "มีรูปร่างคล้ายแมวสยามแต่มีขนยาวกว่า นิสัยขี้เล่นและชอบพูดคุยมาก",
        timeRequirement: "high",
        spaceRequirement: "medium",
        careLevel: "easy",
        origin: "สหรัฐอเมริกา",
        temperament: "ขี้เล่น, ชอบพูดคุย, ฉลาด",
        age: "15 - 20 ปี",
        cautions: "ต้องการความสนใจจากเจ้าของมาก อาจมีอาการเหงาได้",
        price: 20000,
        interaction: "initiating",
        mischievousness: "high",
        furAllergy: "no",
        meowRate: "high",
        experienceLevel: "experienced",
        temperatureTolerance: "warm"
    },
    {
        name: "แองโกลา",
        image: "https://i.ibb.co/bgYJLwzG/132130750.jpg",
        description: "แมวขนยาวที่มีความสง่างาม นิสัยขี้เล่น ฉลาด และเป็นมิตรกับคนและสัตว์เลี้ยงอื่นๆ",
        timeRequirement: "medium",
        spaceRequirement: "medium",
        careLevel: "medium",
        origin: "ตุรกี",
        temperament: "ขี้เล่น, ฉลาด, เป็นมิตร",
        age: "12 - 18 ปี",
        cautions: "ต้องแปรงขนสัปดาห์ละ 2-3 ครั้งเพื่อป้องกันขนพันกัน",
        price: 25000,
        interaction: "seeking",
        mischievousness: "high",
        furAllergy: "no",
        meowRate: "medium",
        experienceLevel: "experienced",
        temperatureTolerance: "warm"
    },
    {
        name: "ฮาวาน่า บราวน์",
        image: "https://i.ibb.co/fdHvL70r/image-12.jpg",
        description: "มีสีขนน้ำตาลช็อกโกแลตเป็นเอกลักษณ์ นิสัยขี้เล่นและชอบการผจญภัย",
        timeRequirement: "medium",
        spaceRequirement: "medium",
        careLevel: "easy",
        origin: "สหราชอาณาจักร",
        temperament: "ขี้เล่น, ชอบผจญภัย, ฉลาด",
        age: "10 - 15 ปี",
        cautions: "ไม่มีข้อควรระวังพิเศษ",
        price: 22000,
        interaction: "initiating",
        mischievousness: "medium",
        furAllergy: "no",
        meowRate: "medium",
        experienceLevel: "beginner",
        temperatureTolerance: "warm"
    },
    {
        name: "สีสวาด",
        image: "https://i.ibb.co/hJBjn16f/Korat-1.jpg",
        description: "แมวไทยโบราณขนสั้นสีเทาเงิน มีดวงตาสีเขียว นิสัยรักสงบ ขี้อาย และเป็นมิตรกับเจ้าของ",
        timeRequirement: "low",
        spaceRequirement: "small",
        careLevel: "easy",
        origin: "ประเทศไทย",
        temperament: "รักสงบ, ขี้อาย, เป็นมิตร",
        age: "15 - 20 ปี",
        cautions: "ไม่ชอบเสียงดังหรือความวุ่นวาย",
        price: 15000,
        interaction: "seeking",
        mischievousness: "low",
        furAllergy: "no",
        meowRate: "low",
        experienceLevel: "beginner",
        temperatureTolerance: "cool"
    },
    {
        name: "เซลเคิร์ก เร็กซ์",
        image: "https://i.ibb.co/7JMXJ8z7/depositphotos-5763786-stock-photo-selkirk-rex-breed-cat-on.webp",
        description: "มีขนหยิกเป็นลอน นิสัยขี้เล่นและใจดี เหมาะสำหรับครอบครัว",
        timeRequirement: "medium",
        spaceRequirement: "medium",
        careLevel: "medium",
        origin: "สหรัฐอเมริกา",
        temperament: "ขี้เล่น, ใจดี, อ่อนโยน",
        age: "10 - 15 ปี",
        cautions: "ขนหยิกต้องการการแปรงอย่างนุ่มนวลเพื่อไม่ให้ขนเสียทรง",
        price: 22000,
        interaction: "seeking",
        mischievousness: "low",
        furAllergy: "no",
        meowRate: "low",
        experienceLevel: "beginner",
        temperatureTolerance: "cool"
    },
    {
        name: "ทอยเกอร์",
        image: "https://i.ibb.co/1tS4SHx0/shutterstock-1234151353.jpg",
        description: "แมวที่มีลวดลายคล้ายเสือ นิสัยฉลาดและขี้เล่น ชอบการฝึกฝน",
        timeRequirement: "high",
        spaceRequirement: "large",
        careLevel: "easy",
        origin: "สหรัฐอเมริกา",
        temperament: "ฉลาด, ขี้เล่น, อ่อนโยน",
        age: "10 - 15 ปี",
        cautions: "เป็นแมวที่แข็งแรง ไม่ค่อยมีปัญหาสุขภาพ",
        price: 55000,
        interaction: "initiating",
        mischievousness: "high",
        furAllergy: "no",
        meowRate: "medium",
        experienceLevel: "experienced",
        temperatureTolerance: "warm"
    },
    {
        name: "แมนซ์ขนยาว",
        image: "https://i.ibb.co/HDmCP3jK/da2a53ee54084fb3a16d555ea0eb47a0.jpg",
        description: "เป็นแมวสายพันธุ์ Manx ที่มีขนยาว นิสัยอ่อนโยนและขี้เล่น",
        timeRequirement: "medium",
        spaceRequirement: "large",
        careLevel: "easy",
        origin: "เกาะแมน",
        temperament: "อ่อนโยน, ขี้เล่น, ฉลาด",
        age: "14 - 16 ปี",
        cautions: "เหมือนกับ Manx, อาจมีปัญหาสุขภาพที่เรียกว่า Cymric Syndrome",
        price: 15000,
        interaction: "initiating",
        mischievousness: "medium",
        furAllergy: "no",
        meowRate: "low",
        experienceLevel: "experienced",
        temperatureTolerance: "cool"
    },
    {
        name: "แอนาโตเลียน",
        image: "https://i.ibb.co/5gZ1Ld3y/C9-G7ey-Bq-ZQz-TWQhq-Pd-Vmt-UYce8ywsv6b-YKEfo-UJw.jpg",
        description: "แมวตุรกีขนสั้น นิสัยเป็นมิตรและขี้เล่น ชอบเล่นน้ำ",
        timeRequirement: "medium",
        spaceRequirement: "medium",
        careLevel: "easy",
        origin: "ตุรกี",
        temperament: "เป็นมิตร, ขี้เล่น, ชอบน้ำ",
        age: "12 - 15 ปี",
        cautions: "เป็นแมวที่ปรับตัวเข้ากับสภาพแวดล้อมได้ง่าย",
        price: 18000,
        interaction: "seeking",
        mischievousness: "medium",
        furAllergy: "no",
        meowRate: "medium",
        experienceLevel: "beginner",
        temperatureTolerance: "warm"
    },
    {
        name: "แมวขาวมณี",
        image: "https://i.ibb.co/F4WdLGkH/880x1024.jpg",
        description: "แมวไทยโบราณที่มีขนสีขาวบริสุทธิ์และดวงตาสองสี นิสัยเป็นมิตรและขี้อ้อนมาก",
        timeRequirement: "medium",
        spaceRequirement: "medium",
        careLevel: "easy",
        origin: "ประเทศไทย",
        temperament: "เป็นมิตร, ขี้อ้อน, ฉลาด",
        age: "15 - 20 ปี",
        cautions: "แมวที่มีตา 2 สีอาจมีโอกาสหูหนวกได้",
        price: 20000,
        interaction: "seeking",
        mischievousness: "low",
        furAllergy: "no",
        meowRate: "medium",
        experienceLevel: "beginner",
        temperatureTolerance: "cool"
    },
    {
        name: "ศุภลักษณ์",
        image: "https://i.ibb.co/v6Hsfkft/4-DQpj-Utz-LUwm-JZZSGoaew5-Vc8-UWSZ1-JBa-HMFv2-Zvd-Qxn.jpg",
        description: "แมวไทยโบราณที่มีขนสีทองแดงและตาสีเหลืองอำพัน นิสัยฉลาดและกระตือรือร้น",
        timeRequirement: "medium",
        spaceRequirement: "medium",
        careLevel: "easy",
        origin: "ประเทศไทย",
        temperament: "ฉลาด, กระตือรือร้น, เป็นมิตร",
        age: "12 - 15 ปี",
        cautions: "เป็นแมวที่ชอบเล่น ควรมีของเล่นให้เล่นบ่อยๆ",
        price: 18000,
        interaction: "initiating",
        mischievousness: "high",
        furAllergy: "no",
        meowRate: "medium",
        experienceLevel: "beginner",
        temperatureTolerance: "warm"
    },
    {
        name: "มันช์กิ้น",
        image: "https://i.ibb.co/hR0dBY0Z/e0ffc82a10bd458c814606534a530cbd.jpg",
        description: "แมวที่มีขาสั้นเป็นเอกลักษณ์ นิสัยขี้เล่น ขี้อ้อน และเข้ากับเด็กได้ดี",
        timeRequirement: "medium",
        spaceRequirement: "medium",
        careLevel: "easy",
        origin: "สหรัฐอเมริกา",
        temperament: "ขี้เล่น, ขี้อ้อน, เป็นมิตร",
        age: "12 - 15 ปี",
        cautions: "ควรระวังเรื่องน้ำหนักเกินเพราะอาจมีผลต่อขาได้",
        price: 30000,
        interaction: "initiating",
        mischievousness: "medium",
        furAllergy: "no",
        meowRate: "low",
        experienceLevel: "beginner",
        temperatureTolerance: "warm"
    },
    {
        name: "บริติช ลองแฮร์",
        image: "https://i.ibb.co/CK60q9kn/i-Kuofq7-WZRuczr0iqn-J7u4g-ZLFd-Gap-B55-F99b-Oe-C.jpg",
        description: "แมวที่มีลักษณะคล้ายบริติช ช็อตแฮร์ แต่มีขนยาว นิสัยสงบและไม่ค่อยซน",
        timeRequirement: "medium",
        spaceRequirement: "medium",
        careLevel: "medium",
        origin: "สหราชอาณาจักร",
        temperament: "สงบ, อ่อนโยน, เป็นมิตร",
        age: "12 - 16 ปี",
        cautions: "ต้องการการแปรงขนอย่างสม่ำเสมอเพื่อป้องกันขนพันกัน",
        price: 40000,
        interaction: "seeking",
        mischievousness: "low",
        furAllergy: "no",
        meowRate: "low",
        experienceLevel: "experienced",
        temperatureTolerance: "cool"
    },
    {
        name: "อเมริกัน บ็อบเทล",
        image: "https://i.ibb.co/JWQkddqx/Ha9-Co-Gscj-Gmx1-AZx6-M51-Dp-IBDo-Dw-R76eh8i-ZFTs7.jpg",
        description: "แมวที่มีหางสั้นเป็นเอกลักษณ์ นิสัยฉลาด ขี้เล่น และชอบการผจญภัย",
        timeRequirement: "high",
        spaceRequirement: "large",
        careLevel: "medium",
        origin: "สหรัฐอเมริกา",
        temperament: "ฉลาด, ขี้เล่น, ชอบผจญภัย",
        age: "13 - 15 ปี",
        cautions: "เป็นแมวที่มีพลังงานสูงและต้องการการออกกำลังกาย",
        price: 25000,
        interaction: "initiating",
        mischievousness: "high",
        furAllergy: "no",
        meowRate: "medium",
        experienceLevel: "experienced",
        temperatureTolerance: "warm"
    },
    {
        name: "ยูเครนเนียน เลฟกอย",
        image: "https://i.ibb.co/845dH7dV/shutterstock-488759317.jpg",
        description: "แมวไร้ขนที่มีหูพับ นิสัยเป็นมิตร ขี้อ้อน และฉลาด",
        timeRequirement: "medium",
        spaceRequirement: "medium",
        careLevel: "hard",
        origin: "ยูเครน",
        temperament: "เป็นมิตร, ขี้อ้อน, ฉลาด",
        age: "12 - 15 ปี",
        cautions: "ต้องการการดูแลผิวหนังเป็นพิเศษและต้องคอยดูแลเรื่องอุณหภูมิร่างกาย",
        price: 70000,
        interaction: "initiating",
        mischievousness: "medium",
        furAllergy: "yes",
        meowRate: "medium",
        experienceLevel: "experienced",
        temperatureTolerance: "warm"
    },
    {
        name: "นอร์วีเจียน ฟอเรสต์",
        image: "https://i.ibb.co/Wp4zsBDX/Norwegian-Forest-2.jpg",
        description: "แมวขนยาวที่มีความสามารถในการปีนป่ายสูง นิสัยเป็นมิตร ขี้เล่น และชอบใช้เวลาอยู่กลางแจ้ง",
        timeRequirement: "medium",
        spaceRequirement: "large",
        careLevel: "medium",
        origin: "นอร์เวย์",
        temperament: "เป็นมิตร, ขี้เล่น, ชอบผจญภัย",
        age: "14 - 16 ปี",
        cautions: "ขนหนาและยาวต้องการการแปรงขนอย่างสม่ำเสมอ",
        price: 30000,
        interaction: "initiating",
        mischievousness: "medium",
        furAllergy: "no",
        meowRate: "low",
        experienceLevel: "experienced",
        temperatureTolerance: "cool"
    },
    {
        name: "อ็อกซี่แคท",
        image: "https://i.ibb.co/wmMX0CR/shutterstock-1037395204.jpg",
        description: "แมวที่มีลวดลายจุดคล้ายเสือ นิสัยขี้เล่นและฉลาดมาก",
        timeRequirement: "high",
        spaceRequirement: "medium",
        careLevel: "easy",
        origin: "สหรัฐอเมริกา",
        temperament: "ขี้เล่น, ฉลาด, ชอบเข้าสังคม",
        age: "12 - 14 ปี",
        cautions: "ต้องการการออกกำลังกายและกิจกรรมที่กระตุ้นความคิด",
        price: 20000,
        interaction: "initiating",
        mischievousness: "high",
        furAllergy: "no",
        meowRate: "high",
        experienceLevel: "experienced",
        temperatureTolerance: "warm"
    },
    {
        name: "สโนว์ชู",
        image: "https://i.ibb.co/GZ3rbt0/depositphotos-120395536-stock-photo-snowshoe-cat-going-to-attack.webp",
        description: "เป็นลูกผสมระหว่างสยามและอเมริกันชอร์ตแฮร์ มีเท้าสีขาว นิสัยขี้อ้อนและเป็นมิตร",
        timeRequirement: "medium",
        spaceRequirement: "medium",
        careLevel: "easy",
        origin: "สหรัฐอเมริกา",
        temperament: "ขี้อ้อน, เป็นมิตร, ฉลาด",
        age: "14 - 19 ปี",
        cautions: "เป็นแมวที่ชอบสื่อสารด้วยเสียง",
        price: 15000,
        interaction: "seeking",
        mischievousness: "medium",
        furAllergy: "no",
        meowRate: "medium",
        experienceLevel: "beginner",
        temperatureTolerance: "cool"
    },
    {
        name: "ออสเตรเลียน มิสต์",
        image: "https://i.ibb.co/G3kMm55N/c477008fa3b34b4ab661a5abe2f0839e.jpg",
        description: "มีลวดลายจุดและลายหินอ่อนบนขน นิสัยใจดีและเข้ากับเด็กได้ดี",
        timeRequirement: "medium",
        spaceRequirement: "small",
        careLevel: "easy",
        origin: "ออสเตรเลีย",
        temperament: "ใจดี, เป็นมิตร, อ่อนโยน",
        age: "15 - 18 ปี",
        cautions: "ไม่มีข้อควรระวังพิเศษ",
        price: 22000,
        interaction: "seeking",
        mischievousness: "low",
        furAllergy: "no",
        meowRate: "medium",
        experienceLevel: "beginner",
        temperatureTolerance: "warm"
    },
    {
        name: "ดีวอน เร็กซ์",
        image: "https://i.ibb.co/Kc4BwXPg/Devon-04.jpg",
        description: "มีใบหน้าคล้ายเอลฟ์และขนหยิก นิสัยขี้เล่นและขี้อ้อนมาก",
        timeRequirement: "high",
        spaceRequirement: "small",
        careLevel: "medium",
        origin: "สหราชอาณาจักร",
        temperament: "ขี้เล่น, ขี้อ้อน, ซุกซน",
        age: "10 - 15 ปี",
        cautions: "ต้องการความสนใจจากเจ้าของมาก",
        price: 25000,
        interaction: "initiating",
        mischievousness: "high",
        furAllergy: "no",
        meowRate: "high",
        experienceLevel: "experienced",
        temperatureTolerance: "warm"
    },
    {
        name: "ซิมริก",
        image: "https://i.ibb.co/pjdzY6PJ/Cymric-cats.jpg",
        description: "แมวไม่มีหางพันธุ์ขนยาว นิสัยอ่อนโยนและขี้เล่น",
        timeRequirement: "medium",
        spaceRequirement: "large",
        careLevel: "easy",
        origin: "เกาะแมน",
        temperament: "อ่อนโยน, ขี้เล่น, ฉลาด",
        age: "14 - 16 ปี",
        cautions: "อาจมีปัญหาสุขภาพที่เกี่ยวข้องกับไขสันหลัง",
        price: 15000,
        interaction: "initiating",
        mischievousness: "medium",
        furAllergy: "no",
        meowRate: "low",
        experienceLevel: "experienced",
        temperatureTolerance: "cool"
    },
    {
        name: "เซอร์วอล",
        image: "https://i.ibb.co/8n3hQnrj/Malawi-in-the-Frost.jpg",
        description: "แมวป่าขนาดกลางที่มีถิ่นกำเนิดในทวีปแอฟริกา มีรูปร่างผอมเพรียว ขายาว หูใหญ่ เป็นนักล่าที่มีประสิทธิภาพ",
        timeRequirement: "high",
        spaceRequirement: "large",
        careLevel: "hard",
        origin: "ทวีปแอฟริกา",
        temperament: "เป็นสัตว์ป่า, ระมัดระวัง, ตื่นตัวสูง",
        age: "10 - 20 ปี",
        cautions: "เป็นสัตว์ป่าไม่ใช่สัตว์เลี้ยง มีสัญชาตญาณนักล่าสูงมากและต้องการพื้นที่กว้างขวางมาก การเลี้ยงเป็นสัตว์เลี้ยงผิดกฎหมายในหลายประเทศ",
        price: 100000,
        interaction: "initianing",
        mischievousness: "high",
        furAllergy: "no",
        meowRate: "low",
        experienceLevel: "experienced",
        temperatureTolerance: "warm"
    }
];

function renderCatCards(cats) {
    const container = document.querySelector('.cat-cards-container');
    if (!container) return;

    container.innerHTML = '';
    if (cats.length === 0) {
        container.innerHTML = '<p style="text-align: center; width: 100%; color: var(--medium-text);">ไม่พบแมวที่ตรงตามเงื่อนไข</p>';
        return;
    }

    cats.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'cat-card';
        card.innerHTML = `
            <img src="${cat.image}" alt="รูปภาพ ${cat.name}">
            <div class="cat-card-info">
                <h3>${cat.name}</h3>
                <p>${cat.description}</p>
            </div>
        `;
        card.addEventListener('click', () => {
            window.location.href = `details.html?name=${cat.name}`;
        });
        container.appendChild(card);
    });
}

function filterCats() {
    const searchInput = document.querySelector('.search-input');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    
    // Checkboxes
    const spaceCheckboxes = document.querySelectorAll('input[name="space"]:checked');
    const interactionCheckboxes = document.querySelectorAll('input[name="interaction"]:checked');
    const careCheckboxes = document.querySelectorAll('input[name="care"]:checked');

    // Dropdowns
    const timeSelect = document.getElementById('time-select').value;
    const mischievousnessSelect = document.getElementById('mischievousness-select').value;
    const furAllergySelect = document.getElementById('fur-allergy-select').value;
    const meowRateSelect = document.getElementById('meow-rate-select').value;
    const experienceSelect = document.getElementById('experience-select').value;
    const tempSelect = document.getElementById('temp-select').value;
    
    // Sliders
    const minPrice = parseInt(document.getElementById('min-price-slider').value);
    const maxPrice = parseInt(document.getElementById('max-price-slider').value);

    let filteredCats = catData.filter(cat => {
        // Search filter
        const matchesSearch = cat.name.toLowerCase().includes(searchTerm) || 
                              cat.description.toLowerCase().includes(searchTerm) ||
                              cat.origin.toLowerCase().includes(searchTerm);
        
        // Checkbox filters
        const matchesSpace = spaceCheckboxes.length === 0 || Array.from(spaceCheckboxes).some(cb => cat.spaceRequirement === cb.value);
        const matchesInteraction = interactionCheckboxes.length === 0 || Array.from(interactionCheckboxes).some(cb => cat.interaction === cb.value);
        const matchesCare = careCheckboxes.length === 0 || Array.from(careCheckboxes).some(cb => cat.careLevel === cb.value);
        
        // Dropdown filters
        const matchesTime = timeSelect === 'all' || cat.timeRequirement === timeSelect;
        const matchesMischievousness = mischievousnessSelect === 'all' || cat.mischievousness === mischievousnessSelect;
        const matchesFurAllergy = furAllergySelect === 'all' || cat.furAllergy === furAllergySelect;
        const matchesMeowRate = meowRateSelect === 'all' || cat.meowRate === meowRateSelect;
        const matchesExperience = experienceSelect === 'all' || cat.experienceLevel === experienceSelect;
        const matchesTemp = tempSelect === 'all' || cat.temperatureTolerance === tempSelect;

        // Price filter
        const matchesPrice = cat.price >= minPrice && cat.price <= maxPrice;

        return matchesSearch && matchesSpace && matchesInteraction && matchesCare && matchesTime && matchesMischievousness && matchesFurAllergy && matchesMeowRate && matchesExperience && matchesTemp && matchesPrice;
    });

    renderCatCards(filteredCats);
}

function updateSliderTrack(minSlider, maxSlider, track) {
    const minVal = parseInt(minSlider.value);
    const maxVal = parseInt(maxSlider.value);
    const min = parseInt(minSlider.min);
    const max = parseInt(minSlider.max);
    
    const minPercent = ((minVal - min) / (max - min)) * 100;
    const maxPercent = ((maxVal - min) / (max - min)) * 100;
    
    const sliderRange = track.nextElementSibling.nextElementSibling;
    sliderRange.style.left = minPercent + '%';
    sliderRange.style.width = (maxPercent - minPercent) + '%';
}

function setupPriceFilter() {
    const minPriceSlider = document.getElementById('min-price-slider');
    const maxPriceSlider = document.getElementById('max-price-slider');
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');
    const priceSliderTrack = document.getElementById('price-slider-track');
    
    minPriceSlider.addEventListener('input', () => {
        let value = parseInt(minPriceSlider.value);
        value = Math.min(value, parseInt(maxPriceSlider.value));
        minPriceSlider.value = value;
        minPriceInput.value = value;
        updateSliderTrack(minPriceSlider, maxPriceSlider, priceSliderTrack);
        filterCats();
    });

    maxPriceSlider.addEventListener('input', () => {
        let value = parseInt(maxPriceSlider.value);
        value = Math.max(value, parseInt(minPriceSlider.value));
        maxPriceSlider.value = value;
        maxPriceInput.value = value;
        updateSliderTrack(minPriceSlider, maxPriceSlider, priceSliderTrack);
        filterCats();
    });

    minPriceInput.addEventListener('change', () => {
        let value = parseInt(minPriceInput.value);
        value = Math.max(0, Math.min(value, parseInt(maxPriceInput.value)));
        minPriceInput.value = value;
        minPriceSlider.value = value;
        updateSliderTrack(minPriceSlider, maxPriceSlider, priceSliderTrack);
        filterCats();
    });

    maxPriceInput.addEventListener('change', () => {
        let value = parseInt(maxPriceInput.value);
        value = Math.min(100000, Math.max(value, parseInt(minPriceInput.value)));
        maxPriceInput.value = value;
        maxPriceSlider.value = value;
        updateSliderTrack(minPriceSlider, maxPriceSlider, priceSliderTrack);
        filterCats();
    });
}

function clearFilters() {
    // Clear checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);

    // Reset dropdowns
    const dropdowns = document.querySelectorAll('.filter-select');
    dropdowns.forEach(dropdown => dropdown.value = 'all');
    
    // Reset price sliders
    const minPriceSlider = document.getElementById('min-price-slider');
    const maxPriceSlider = document.getElementById('max-price-slider');
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');
    
    minPriceSlider.value = minPriceSlider.min;
    maxPriceSlider.value = maxPriceSlider.max;
    minPriceInput.value = minPriceSlider.min;
    maxPriceInput.value = maxPriceSlider.max;
    
    // Reset slider track
    const priceSliderTrack = document.getElementById('price-slider-track');
    updateSliderTrack(minPriceSlider, maxPriceSlider, priceSliderTrack);

    // Clear search input
    const searchInput = document.querySelector('.search-input');
    if (searchInput) searchInput.value = '';

    // Re-render all cats
    filterCats();
}

function renderCatDetails() {
    const params = new URLSearchParams(window.location.search);
    const catName = params.get('name');
    const cat = catData.find(c => c.name === catName);

    if (cat) {
        const detailsContainer = document.getElementById('cat-details');
        detailsContainer.innerHTML = `
            <a href="cats.html" class="back-button"><i class="fa fa-arrow-left"></i> กลับไปหน้าค้นหา</a>
            <img src="${cat.image}" alt="${cat.name}" class="details-image">
            <h2>${cat.name}</h2>
            <p class="cat-description">${cat.description}</p>
            <div class="details-info">
                <div class="info-box">
                    <h4><i class="fa fa-map-marker-alt"></i> ถิ่นกำเนิด</h4>
                    <p>${cat.origin}</p>
                </div>
                <div class="info-box">
                    <h4><i class="fa fa-heart"></i> นิสัย</h4>
                    <p>${cat.temperament}</p>
                </div>
                <div class="info-box">
                    <h4><i class="fa fa-birthday-cake"></i> อายุเฉลี่ย</h4>
                    <p>${cat.age}</p>
                </div>
                <div class="info-box">
                    <h4><i class="fa fa-bolt"></i> ความซน</h4>
                    <p>${cat.mischievousness === 'high' ? 'ซนมาก' : cat.mischievousness === 'medium' ? 'ปานกลาง' : 'รักสงบ'}</p>
                </div>
                <div class="info-box">
                    <h4><i class="fa fa-user-times"></i> แพ้ขน</h4>
                    <p>${cat.furAllergy === 'yes' ? 'เหมาะสำหรับคนแพ้ขน' : 'ไม่เหมาะสำหรับคนแพ้ขน'}</p>
                </div>
                <div class="info-box">
                    <h4><i class="fa fa-volume-up"></i> อัตราการร้อง</h4>
                    <p>${cat.meowRate === 'high' ? 'ร้องบ่อย' : cat.meowRate === 'medium' ? 'ปานกลาง' : 'ร้องไม่บ่อย'}</p>
                </div>
                <div class="info-box">
                    <h4><i class="fa fa-graduation-cap"></i> ประสบการณ์การเลี้ยง</h4>
                    <p>${cat.experienceLevel === 'beginner' ? 'มือใหม่' : 'มีประสบการณ์'}</p>
                </div>
                <div class="info-box">
                    <h4><i class="fa fa-thermometer-half"></i> อุณหภูมิที่เลี้ยง</h4>
                    <p>${cat.temperatureTolerance === 'cool' ? 'ชอบอากาศเย็น' : 'ชอบอากาศอบอุ่น'}</p>
                </div>
                <div class="info-box full-width">
                    <h4><i class="fa fa-exclamation-triangle"></i> ข้อควรระวัง</h4>
                    <p>${cat.cautions}</p>
                </div>
            </div>
        `;
    } else {
        const detailsContainer = document.getElementById('cat-details');
        detailsContainer.innerHTML = `<p>ไม่พบข้อมูลแมว</p>`;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.cat-cards-container')) {
        renderCatCards(catData);
        setupPriceFilter();
        
        // Initial track update for price slider
        const minPriceSlider = document.getElementById('min-price-slider');
        const maxPriceSlider = document.getElementById('max-price-slider');
        const priceSliderTrack = document.getElementById('price-slider-track');
        if (minPriceSlider && maxPriceSlider && priceSliderTrack) {
            updateSliderTrack(minPriceSlider, maxPriceSlider, priceSliderTrack);
        }

        // Event listeners for checkboxes
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', filterCats);
        });
        
        // Event listeners for dropdowns
        const dropdowns = document.querySelectorAll('.filter-select');
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('change', filterCats);
        });

        // Event listener for search input
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.addEventListener('input', filterCats);
        }

    } else if (document.getElementById('cat-details')) {
        renderCatDetails();
    }
});