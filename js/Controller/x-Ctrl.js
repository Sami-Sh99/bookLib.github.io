app.controller('x', ['$scope', function($scope) {

    $scope.Books=[
      {
          "image": "https://pictures.abebooks.com/isbn/9789953887692-us-300.jpg",
          "BookTitle": "مذكرات نيلسون مانديلا",
          "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888521-us-300.jpg",
        "BookTitle": "مذكرات هيلاري كلنتون-خيارات صعبة",
        "Price": " $ 16.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953886299-us-300.jpg",
        "BookTitle": "مذكرات جورج دبليو بوش بقلمه",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953886077-us-300.jpg",
        "BookTitle": "مذكرات طوني بلير-فني",
        "Price": " $ 20.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953886282-us-300.jpg",
        "BookTitle": "مذكرات البيت الابيض",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887685-us-300.jpg",
        "BookTitle": "القياصرة الاميركيون",
        "Price": " $ 15.00 "
      },
      {
          "image": "https://www.all-prints.com/Admin/Pictures/Books/C38.jpg",
          "BookTitle": "الواجب-مذكرات روبرت غايتس",
          "Price": " $ 26.00 "
      },
      {
        "image": "https://abjjadst.blob.core.windows.net/pub/8c29b72e-8c4a-4e4e-9ec6-7f5bd5f76f45.JPG",
        "BookTitle": "الاسد والصراع على الشرق الاوسط",
        "Price": " $ 18.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888231-us-300.jpg",
        "BookTitle": "حياتي مع طالبان",
        "Price": " $ 13.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953880730-us-300.jpg",
        "BookTitle": "ستالين الشاب",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953884264-us-300.jpg",
        "BookTitle": "ابي لافرنتي بيريا",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953883915-us-300.jpg",
        "BookTitle": "تاريخ العربية السعودية",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888101-us-300.jpg",
        "BookTitle": "قيام طائفة امة موسى الصدر",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887371-us-300.jpg",
        "BookTitle": "الحضارة",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953880808-us-300.jpg",
        "BookTitle": "الدالاي لاما",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888088-us-300.jpg",
        "BookTitle": "بلا هوادة المسيرة السياسية لرجل الدولة الرئيس سليم الحص",
        "Price": " $ 17.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888545-us-300.jpg",
        "BookTitle": "بكامل رصيدنا",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882192-us-300.jpg",
        "BookTitle": "ويلات وطن فني",
        "Price": " $ 16.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885834-us-300.jpg",
        "BookTitle": "زمن المحارب",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9786144585047-us-300.jpg",
        "BookTitle": "ما بعد القتال حرب القوة الناعمة بين أميركا و حزب الله",
        "Price": " $ 16.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9786144585023-us-300.jpg",
        "BookTitle": "حزب الله من فتنة الربيع العربي إلى جيوبوليتيك المنطقة",
        "Price": " $ 13.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889634-us-300.jpg",
        "BookTitle": "مفاتيح السياسة الروسية",
        "Price": " $ 18.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9786144585009-us-300.jpg",
        "BookTitle": "خوف ترامب في البيت الابيض",
        "Price": " $ 17.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889870-us-300.jpg",
        "BookTitle": "نار وغضب",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889894-us-300.jpg",
        "BookTitle": "ما الذي حدث",
        "Price": " $ 16.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889962-us-300.jpg",
        "BookTitle": "الهياكل المالية للتنظيمات الارهابية-العراق نموذجا",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889924-us-300.jpg",
        "BookTitle": "جريمة ولا عقاب-الحرب الاهلية اللبنانية وترميم النظام الطائفي",
        "Price": " $ 11.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889702-us-300.jpg",
        "BookTitle": "المقاومة المدنية في الربيع العربي-الانتصارات والكوارث",
        "Price": " $ 16.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889832-us-300.jpg",
        "BookTitle": "ميادين التدخل السياسية-الخارجية الاميركية وانهيار لبنان 1967-1976",
        "Price": " $ 18.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889795-us-300.jpg",
        "BookTitle": "الجوانب القانونية والدولية لقرار مجلس الامن الدولي 1701",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889689-us-300.jpg",
        "BookTitle": "ثورة ايمانويل ماكرون داخل فكر اصغر رئيس في تاريخ فرنسا",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889580-us-300.jpg",
        "BookTitle": "500يوم اسرار واكاذيب الحرب على الارهاب",
        "Price": " $ 28.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889412-us-300.jpg",
        "BookTitle": "صراعات الجيل الخامس",
        "Price": " $ 13.50 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889429-us-300.jpg",
        "BookTitle": "حرب الشفق-خفايا ثلاثين عاما من الصراع الاميركي الايراني",
        "Price": " $ 25.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888552-us-300.jpg",
        "BookTitle": "حروب قذرة ميدان المعركة: العالم",
        "Price": " $ 20.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888620-us-300.jpg",
        "BookTitle": "حروب الإمبراطوريات",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888408-us-300.jpg",
        "BookTitle": "حروب الظل",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888507-us-300.jpg",
        "BookTitle": "الحرب العالمية الثالثة-داعش والعراق",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953880495-us-300.jpg",
        "BookTitle": "بلاكووتر اخطر منظمة سرية في العالم",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953880723-us-300.jpg",
        "BookTitle": "حروب الاشباح",
        "Price": " $ 20.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953880716-us-300.jpg",
        "BookTitle": "ارث من الرماد",
        "Price": " $ 20.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888446-us-300.jpg",
        "BookTitle": "الأعداء",
        "Price": " $ 18.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887968-us-300.jpg",
        "BookTitle": "الرايات السود",
        "Price": " $ 18.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888217-us-300.jpg",
        "BookTitle": "فن التجسس",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953886404-us-300.jpg",
        "BookTitle": "قصور من الرمال",
        "Price": " $ 14.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885629-us-300.jpg",
        "BookTitle": "المراقبة الشاملة اصل النظام الامني",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953886015-us-300.jpg",
        "BookTitle": "الرقميون أنت مراقب 24/24",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953884868-us-300.jpg",
        "BookTitle": "الماسونية",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885865-us-300.jpg",
        "BookTitle": "عقيدة الصدمة",
        "Price": " $ 20.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889801-us-300.jpg",
        "BookTitle": "الخصخصة تاريخها ودورها في تحريك الاقتصاد العالمي",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953883557-us-300.jpg",
        "BookTitle": "انهيار الإقتصاد العالمي نهاية عصر الجشع",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885339-us-300.jpg",
        "BookTitle": "الطبقة الخارقة نخبة التسلط العالمي",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953880594-us-300.jpg",
        "BookTitle": "لعبة قديمة بعمر الامبراطورية",
        "Price": " $ 13.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887746-us-300.jpg",
        "BookTitle": "العودة الى العمل",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888040-us-300.jpg",
        "BookTitle": "السياسة الخارجية التركية",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953886176-us-300.jpg",
        "BookTitle": "صراع القوى الكبرى على سوريا",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882260-us-300.jpg",
        "BookTitle": "سورية ومفاوضات السلام في الشرق الأوسط",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888781-us-300.jpg",
        "BookTitle": "الديمقراطية ابحاث مختارة",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888484-us-300.jpg",
        "BookTitle": "انماط الديموقراطية",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888873-us-300.jpg",
        "BookTitle": "الانتقال العسكري تأملات حول الإصلاح الديمقراطي للقوات المسلحة",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953881454-us-300.jpg",
        "BookTitle": "الدولة الديموقراطية",
        "Price": " $ 7.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888279-us-300.jpg",
        "BookTitle": "عن الديموقراطية",
        "Price": " $ 9.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888118-us-300.jpg",
        "BookTitle": "ديموقراطيات في خطر",
        "Price": " $ 9.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885537-us-300.jpg",
        "BookTitle": "كتاب المراسم",
        "Price": " $ 6.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885025-us-300.jpg",
        "BookTitle": "اميركا في خطر مذكرات بول فندلي",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953884257-us-300.jpg",
        "BookTitle": "لا سكوت بعد اليوم",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953881270-us-300.jpg",
        "BookTitle": "الخداع",
        "Price": " $ 7.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953884837-us-300.jpg",
        "BookTitle": "من يجرؤ على الكلام",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888330-us-300.jpg",
        "BookTitle": "السياسة الخارجية الايرانية",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887883-us-300.jpg",
        "BookTitle": "صناعة المستقبل",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953886121-us-300.jpg",
        "BookTitle": "غزة في ازمة",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887982-us-300.jpg",
        "BookTitle": "ثورات في كل مكان",
        "Price": " $ 14.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888064-us-300.jpg",
        "BookTitle": "ثورات الفايسبوك",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953886473-us-300.jpg",
        "BookTitle": "العودة الى الصفر",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953886374-us-300.jpg",
        "BookTitle": "امبراطورية الارهاب",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887012-us-300.jpg",
        "BookTitle": "نظرية الاحتواء",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887913-us-300.jpg",
        "BookTitle": "السايفربانك حرية شبكة الانترنت ومستقبلها",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887975-us-300.jpg",
        "BookTitle": "التمادي في المعرفة",
        "Price": " $ 20.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887937-us-300.jpg",
        "BookTitle": "الصراع الدولي للسيطرة على الشرق الاوسط",
        "Price": " $ 13.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953883779-us-300.jpg",
        "BookTitle": "الاخطبوط الصهيوني والإدارة الأميركية",
        "Price": " $ 14.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887418-us-300.jpg",
        "BookTitle": "قضيتي ضد اسرائيل",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887838-us-300.jpg",
        "BookTitle": "البعد التوراتي للارهاب الاسرائيلي",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887869-us-300.jpg",
        "BookTitle": "الفلسطينيون المنسيون تاريخ فلسطينيي 1948",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953884691-us-300.jpg",
        "BookTitle": "التاريخ العسكري لبني اسرائيل 1",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953884707-us-300.jpg",
        "BookTitle": "التاريخ العسكري لبني اسرائيل 2",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953884790-us-300.jpg",
        "BookTitle": "الصهيونية الشرق أوسطية",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953886114-us-300.jpg",
        "BookTitle": "وثائق ويكيليكس الكاملة-ج2-لبنان واسرائيل",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885872-us-300.jpg",
        "BookTitle": "وثائق ويكيليكس الكاملة-ج1-لبنان واسرائيل",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953881744-us-300.jpg",
        "BookTitle": "الديانة اليهودية وتاريخ اليهود",
        "Price": " $ 7.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953881379-us-300.jpg",
        "BookTitle": "نهضة اليابان",
        "Price": " $ 7.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888569-us-300.jpg",
        "BookTitle": "إشكالية المكان",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953886343-us-300.jpg",
        "BookTitle": "التغير المناخي",
        "Price": " $ 9.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953880785-us-300.jpg",
        "BookTitle": "نقد الفكر الوطني شروط تحقق الأوطان في جغرافيا العالم",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885315-us-300.jpg",
        "BookTitle": "الجيوبوليتيكا قضايا الهوية والانشاء بين الجغرافيا والسياسة",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885094-us-300.jpg",
        "BookTitle": "ارض لا تهدأ الرهانات الجيوبولي",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953881973-us-300.jpg",
        "BookTitle": "الشرق الاوسط دراسة جيوبوليتيكي",
        "Price": " $ 6.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882727-us-300.jpg",
        "BookTitle": "السلام المفقود",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882710-us-300.jpg",
        "BookTitle": "لعنة وطن من حرب لبنان إلى حرب الخليج",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889467-us-300.jpg",
        "BookTitle": "دروب دمشق الملف الاسود للعلاقات الفرنسية السورية",
        "Price": " $ 18.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889504-us-300.jpg",
        "BookTitle": "الأمة اللبنانية من المصالح الأجنبية الى الوقائع المحلية",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888347-us-300.jpg",
        "BookTitle": "حزب الله والدولة في لبنان",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953886275-us-300.jpg",
        "BookTitle": "وهم السلم الاهلي-اضطراب الحدود بين الماضي والحاضر",
        "Price": " $ 13.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885063-us-300.jpg",
        "BookTitle": "الصراع على السلطة في لبنان",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953884240-us-300.jpg",
        "BookTitle": "الفرصة الضائعة في الاصلاح المالي",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953881737-us-300.jpg",
        "BookTitle": "قصة الموارنة في الحرب",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953884899-us-300.jpg",
        "BookTitle": "الايادي السود",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953886091-us-300.jpg",
        "BookTitle": "حقيقة ليكس باصواتهم ادينوا",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882598-us-300.jpg",
        "BookTitle": "المبسط في الدستور اللبناني",
        "Price": " $ 9.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953883618-us-300.jpg",
        "BookTitle": "الدستور اللبناني المعدل",
        "Price": " $ 1.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953883601-us-300.jpg",
        "BookTitle": "وثيقة الوفاق الوطني",
        "Price": " $ 3.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953884929-us-300.jpg",
        "BookTitle": "الطربوش",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953884684-us-300.jpg",
        "BookTitle": "الضوء الاصفر",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953883472-us-300.jpg",
        "BookTitle": "فؤاد شهاب",
        "Price": " $ 3.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953881560-us-300.jpg",
        "BookTitle": "التشكيلات الناصرية في لبنان",
        "Price": " $ 6.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953881461-us-300.jpg",
        "BookTitle": "ثمن الدم والدمار",
        "Price": " $ 7.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953881508-us-300.jpg",
        "BookTitle": "مزارع شبعا",
        "Price": " $ 6.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953886367-us-300.jpg",
        "BookTitle": "قطاف من التجارب-آراء ومواقف",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882222-us-300.jpg",
        "BookTitle": "ومضات في رحاب الأمة",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882949-us-300.jpg",
        "BookTitle": "ما قل ودل",
        "Price": " $ 9.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882154-us-300.jpg",
        "BookTitle": "في زمن الشدائد لبنانيا وعربيا",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953884530-us-300.jpg",
        "BookTitle": "سلاح الموقف",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953884516-us-300.jpg",
        "BookTitle": "تعالوا الى كلمة سواء",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953884493-us-300.jpg",
        "BookTitle": "صوت بلا صدى",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885247-us-300.jpg",
        "BookTitle": "عصارة العمر",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953881577-us-300.jpg",
        "BookTitle": "نحن والطائفية",
        "Price": " $ 6.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885148-us-300.jpg",
        "BookTitle": "محطات وطنية وقومية",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953884998-us-300.jpg",
        "BookTitle": "للحقيقة والتاريخ-سليم الحص",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953883953-us-300.jpg",
        "BookTitle": "قاموس الكافي",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953883786-us-300.jpg",
        "BookTitle": "الثورة العربية الكبرى",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885414-us-300.jpg",
        "BookTitle": "ثلاثة من اعلام الحرية",
        "Price": " $ 7.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953881881-us-300.jpg",
        "BookTitle": "اشهر المحاكمات في التاريخ",
        "Price": " $ 5.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885421-us-300.jpg",
        "BookTitle": "صلاح الدين الايوبي",
        "Price": " $ 7.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953884097-us-300.jpg",
        "BookTitle": "موسوعة الامثال والحكم والاقوال",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953883892-us-300.jpg",
        "BookTitle": "التيارات الفنية المعاصرة",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953884301-us-300.jpg",
        "BookTitle": "دراسات في تاريخ المدن العربية",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953884226-us-300.jpg",
        "BookTitle": "دولة الرسول في المدينة",
        "Price": " $ 13.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953881515-us-300.jpg",
        "BookTitle": "الادارة في العهود الاسلامية الاولى",
        "Price": " $ 7.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953881478-us-300.jpg",
        "BookTitle": "عمر بن عبد العزيز",
        "Price": " $ 6.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953884974-us-300.jpg",
        "BookTitle": "تاريخ العرب القديم والبعثة النبوية",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882000-us-300.jpg",
        "BookTitle": "اهل الفسطاط",
        "Price": " $ 6.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953881485-us-300.jpg",
        "BookTitle": "نكت الوزراء",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953881614-us-300.jpg",
        "BookTitle": "الخراج احكامه ومقاديره",
        "Price": " $ 6.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953884271-us-300.jpg",
        "BookTitle": "الفتوحات الاسلامية",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953881553-us-300.jpg",
        "BookTitle": "المنسوجات والالبسة العربية في العصور الاسلامية الاولى",
        "Price": " $ 7.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885230-us-300.jpg",
        "BookTitle": "الكوفة واهلها في صدر الاسلام",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953881492-us-300.jpg",
        "BookTitle": "عمان في العصور الاسلامية الاولى",
        "Price": " $ 7.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953881522-us-300.jpg",
        "BookTitle": "سامراء دراسة في النشأة والبنية",
        "Price": " $ 7.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953884370-us-300.jpg",
        "BookTitle": "هارون الرشيد",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885469-us-300.jpg",
        "BookTitle": "الفن العسكري الاسلامي",
        "Price": " $ 6.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887388-us-300.jpg",
        "BookTitle": "الرواد",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888262-us-300.jpg",
        "BookTitle": "العقل التكفيري",
        "Price": " $ 11.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888255-us-300.jpg",
        "BookTitle": "هل الجنة للمسلمين وحدهم",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889818-us-300.jpg",
        "BookTitle": "المطران والشيطان-قراءات ومحطات في تجربة غريغوار حداد",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889917-us-300.jpg",
        "BookTitle": "المرأة الأندلسية مرآةُ حضارة شعت لحظة و تشظت",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9786144585030-us-300.jpg",
        "BookTitle": "دهاء شبكات التواصل الإجتماعي وخبايا الذكاء الإصطناعي",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888125-us-300.jpg",
        "BookTitle": "الإنسانيات الرقمية",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882604-us-300.jpg",
        "BookTitle": "القدرة العقلية درجة الذكاء-حاصل الذكاء",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882611-us-300.jpg",
        "BookTitle": "حول نظرية النسبية رؤية رياضية",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885087-us-300.jpg",
        "BookTitle": "البحث العلمي بنماذجه الاساسية",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953880075-us-300.jpg",
        "BookTitle": "العلاج بالكف",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953883144-us-300.jpg",
        "BookTitle": "علم الفراسة والتشخيص",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885100-us-300.jpg",
        "BookTitle": "دليل الماكروبيوتيك الى الحياة",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885124-us-300.jpg",
        "BookTitle": "زن ماكروبيوتيك-اسرار الشباب",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889603-us-300.jpg",
        "BookTitle": "الحرية شجاعتك أن تكون كما أنت",
        "Price": " $ 7.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953881805-us-300.jpg",
        "BookTitle": "العلاقة الحميمة لغز العلاقة الحامية",
        "Price": " $ 5.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953881836-us-300.jpg",
        "BookTitle": "الفهم",
        "Price": " $ 5.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953881843-us-300.jpg",
        "BookTitle": "النضج عودة الانسان الى ذاته",
        "Price": " $ 5.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953881812-us-300.jpg",
        "BookTitle": "الابداع",
        "Price": " $ 5.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953881850-us-300.jpg",
        "BookTitle": "الحدس ابعد من اي حس",
        "Price": " $ 5.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953881829-us-300.jpg",
        "BookTitle": "الشجاعة",
        "Price": " $ 5.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953886398-us-300.jpg",
        "BookTitle": "فن الحياة-التأمل الإستبطاني لفحص الذات",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889825-us-300.jpg",
        "BookTitle": "واقع التربية في المجتمع الشرقي المعاصر",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953881683-us-300.jpg",
        "BookTitle": "كيف نواجه الاكتئاب",
        "Price": " $ 6.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953880310-us-300.jpg",
        "BookTitle": "كيف تؤكد ذاتك",
        "Price": " $ 6.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953880051-us-300.jpg",
        "BookTitle": "الوسواس",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885223-us-300.jpg",
        "BookTitle": "طرائق ومنهجية البحث في علم النفس",
        "Price": " $ 9.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885001-us-300.jpg",
        "BookTitle": "علم النفس والعولمة",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887951-us-300.jpg",
        "BookTitle": "الإتيكيت",
        "Price": " $ 7.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888583-us-300.jpg",
        "BookTitle": "حقول التحليل النفسي والصحة العقلية كما الروحية والحضارية",
        "Price": " $ 13.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888385-us-300.jpg",
        "BookTitle": "الفلسفة المحضة والفلسفات النفسية والطبيعية",
        "Price": " $ 16.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889641-us-300.jpg",
        "BookTitle": "المنعطف",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953886459-us-300.jpg",
        "BookTitle": "التوأم",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885681-us-300.jpg",
        "BookTitle": "دماء الأزهار",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9781927946596-us-300.jpg",
        "BookTitle": "نظرية الاجيال",
        "Price": " $ 30.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9781927946435-us-300.jpg",
        "BookTitle": "إبراهيم في السرديات اليهودية-المسيحية-الاسلامية",
        "Price": " $ 30.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9781927946459-us-300.jpg",
        "BookTitle": "الاعلم بين الشيعة",
        "Price": " $ 27.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887456-us-300.jpg",
        "BookTitle": "الاستشراق في التاريخ: الاشكاليات، الدوافع، التوجهات، الاهتمامات",
        "Price": " $ 20.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887630-us-300.jpg",
        "BookTitle": "ابحاث في تاريخ العرب قبل الاسلام",
        "Price": " $ 20.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887647-us-300.jpg",
        "BookTitle": "ابحاث في التاريخ الاسلامي",
        "Price": " $ 20.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887852-us-300.jpg",
        "BookTitle": "الرومنطيقية في الشعر العربي المعاصر",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953883823-us-300.jpg",
        "BookTitle": "خيال الظل العربي",
        "Price": " $ 35.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887739-us-300.jpg",
        "BookTitle": "توازن الرعب",
        "Price": " $ 18.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888095-us-300.jpg",
        "BookTitle": "إحتلوا",
        "Price": " $ 7.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953886428-us-300.jpg",
        "BookTitle": "معمودية النار",
        "Price": " $ 9.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885605-us-300.jpg",
        "BookTitle": "اوباما والسلام المستحيل معركة مصير",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885698-us-300.jpg",
        "BookTitle": "اميركا من الداخل حروب من أجل النفط",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888422-us-300.jpg",
        "BookTitle": "التلفزة المعاصرة",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953883687-us-300.jpg",
        "BookTitle": "هكذا ..,وقع التوطين من كيسنجر إلى الحريري إلى عباس",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953883694-us-300.jpg",
        "BookTitle": "تاريخ الشرق الاوسط",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882239-us-300.jpg",
        "BookTitle": "كيف تكتب خبرا تلفزيونيا",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953880563-us-300.jpg",
        "BookTitle": "ابناء الطوائف اشكاليات التعليم الديني",
        "Price": " $ 5.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953880891-us-300.jpg",
        "BookTitle": "رؤساء الجمهورية اللبنانية",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953880105-us-300.jpg",
        "BookTitle": "الكتابة للصورة",
        "Price": " $ 6.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882116-us-300.jpg",
        "BookTitle": "جوانب من التاريخ والحضارة في العصور العباسية",
        "Price": " $ 5.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953883588-us-300.jpg",
        "BookTitle": "ثلاثية الحكم في العصور العباسي",
        "Price": " $ 4.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882086-us-300.jpg",
        "BookTitle": "المعتصم وعسكرة الخلافة العباسية",
        "Price": " $ 5.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953886022-us-300.jpg",
        "BookTitle": "في الشائعات",
        "Price": " $ 9.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889849-us-300.jpg",
        "BookTitle": "المركبات ذاتية القيادة-التحديات القانونية والتقنية",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885773-us-300.jpg",
        "BookTitle": "الحريم اللغوي",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953880273-us-300.jpg",
        "BookTitle": "كيف نواجه الخوف",
        "Price": " $ 2.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953881775-us-300.jpg",
        "BookTitle": "علم الطاقات التسع",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953883526-us-300.jpg",
        "BookTitle": "كنوز العرب",
        "Price": " $ 5.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953883533-us-300.jpg",
        "BookTitle": "قالوا وفعلوا وقائع من تاريخ العرب وتراثهم",
        "Price": " $ 5.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888149-us-300.jpg",
        "BookTitle": "الظل فجر داكن",
        "Price": " $ 8.50 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888705-us-300.jpg",
        "BookTitle": "اخاف الله والحب والوطن",
        "Price": " $ 9.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888699-us-300.jpg",
        "BookTitle": "الأرض حذاء مستعمل",
        "Price": " $ 9.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889863-us-300.jpg",
        "BookTitle": "فهرس الانتظار",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882819-us-300.jpg",
        "BookTitle": "الخيميائي",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889993-us-300.jpg",
        "BookTitle": "هيبي",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953886138-us-300.jpg",
        "BookTitle": "الف-رواية",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889474-us-300.jpg",
        "BookTitle": "الجاسوسة",
        "Price": " $ 7.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888392-us-300.jpg",
        "BookTitle": "الزانية",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887760-us-300.jpg",
        "BookTitle": "مخطوطة وجدت في عكرا",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953883021-us-300.jpg",
        "BookTitle": "الرابح يبقى وحيداً",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882567-us-300.jpg",
        "BookTitle": "احدى عشرة دقيقة",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882512-us-300.jpg",
        "BookTitle": "فيرونيكا تقرر أن تموت-رواية",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882529-us-300.jpg",
        "BookTitle": "على نهر بييدرا هناك جلست فبكيت",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953880143-us-300.jpg",
        "BookTitle": "ساحرة بورتوبيللو",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882536-us-300.jpg",
        "BookTitle": "حاج كومبوستيلا-رواية",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882543-us-300.jpg",
        "BookTitle": "الجبل الخامس",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882383-us-300.jpg",
        "BookTitle": "بريدا",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882550-us-300.jpg",
        "BookTitle": "الشيطان والانسة بريم",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882369-us-300.jpg",
        "BookTitle": "اوراق محارب الضوء",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882376-us-300.jpg",
        "BookTitle": "مكتوب",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887906-us-300.jpg",
        "BookTitle": "كرنفال",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953883083-us-300.jpg",
        "BookTitle": "الصرصار",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953880815-us-300.jpg",
        "BookTitle": "لعبة دي نيرو",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889979-us-300.jpg",
        "BookTitle": "سمو الأميرة الأسرار المباحة",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889955-us-300.jpg",
        "BookTitle": "سمو الأميرة حفنة أخرى من الدموع",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885797-us-300.jpg",
        "BookTitle": "سمو الاميرة",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953883076-us-300.jpg",
        "BookTitle": "بنات سمو الاميرة",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953886244-us-300.jpg",
        "BookTitle": "حلقة الاميرة سلطانة",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953886268-us-300.jpg",
        "BookTitle": "لأنك ولدي",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953880587-us-300.jpg",
        "BookTitle": "مغامرة حب في بلاد ممزقة",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888163-us-300.jpg",
        "BookTitle": "ميادة ابنة العراق",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888439-us-300.jpg",
        "BookTitle": "خيار ياسمينا",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887722-us-300.jpg",
        "BookTitle": "مذكرات امرأة شيعية",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888675-us-300.jpg",
        "BookTitle": "شيطان في نيو قرطاج",
        "Price": " $ 13.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882987-us-300.jpg",
        "BookTitle": "سجن غوانتانامو",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953883038-us-300.jpg",
        "BookTitle": "في قلب المملكة حياتي في السعودية",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9786144585016-us-300.jpg",
        "BookTitle": "التدمير",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9786144585092-us-300.jpg",
        "BookTitle": "محاولة متأخرة للبكاء",
        "Price": " $ 11.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889771-us-300.jpg",
        "BookTitle": "العاصفة",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889658-us-300.jpg",
        "BookTitle": "الضفادع",
        "Price": " $ 16.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889931-us-300.jpg",
        "BookTitle": "في وسط العاصمة حانة مسحورة",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889665-us-300.jpg",
        "BookTitle": "مدينة بوهاين",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889856-us-300.jpg",
        "BookTitle": "حياة-رواية",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889948-us-300.jpg",
        "BookTitle": "سلاحف الى ما لا نهاية",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888316-us-300.jpg",
        "BookTitle": "ما تخبئه النجوم",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889436-us-300.jpg",
        "BookTitle": "الديار",
        "Price": " $ 10.50 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953886039-us-300.jpg",
        "BookTitle": "رحمة-رواية",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889528-us-300.jpg",
        "BookTitle": "بوليغامي أو كثيرة العرسان",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/AL017Y4620779-us-300.jpg",
        "BookTitle": "وداد من حلب-رواية",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888194-us-300.jpg",
        "BookTitle": "عند تلاشي الضوء",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888309-us-300.jpg",
        "BookTitle": "حكاية الشتاء",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953883120-us-300.jpg",
        "BookTitle": "الوردة الضائعة",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953886435-us-300.jpg",
        "BookTitle": "حين تستحيل الحياة نوراً",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888026-us-300.jpg",
        "BookTitle": "المنور",
        "Price": " $ 13.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887777-us-300.jpg",
        "BookTitle": "سأعطيك الحلوى شرط ان تموت",
        "Price": " $ 7.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888156-us-300.jpg",
        "BookTitle": "موعظة عن سقوط روما",
        "Price": " $ 13.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953880068-us-300.jpg",
        "BookTitle": "امرأة وظلان",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953880860-us-300.jpg",
        "BookTitle": "حب محرم",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953880044-us-300.jpg",
        "BookTitle": "اعترافات غايشا",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889511-us-300.jpg",
        "BookTitle": "فوق ارض لبنان",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888378-us-300.jpg",
        "BookTitle": "خلف أسوار بيروت",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888132-us-300.jpg",
        "BookTitle": "محاولات إغتيال علي",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953880297-us-300.jpg",
        "BookTitle": "سوريو جسر الكولا",
        "Price": " $ 9.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889368-us-300.jpg",
        "BookTitle": "بين العفاف وحرمة القبل",
        "Price": " $ 7.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888460-us-300.jpg",
        "BookTitle": "صورة على هاتف جوال",
        "Price": " $ 11.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888286-us-300.jpg",
        "BookTitle": "خلف العتمة",
        "Price": " $ 6.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887715-us-300.jpg",
        "BookTitle": "ذبائح ملونة",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885650-us-300.jpg",
        "BookTitle": "الخجل والكرامة",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953888361-us-300.jpg",
        "BookTitle": "نقطة",
        "Price": " $ 13.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953889375-us-300.jpg",
        "BookTitle": "ضوع الياسمين",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887036-us-300.jpg",
        "BookTitle": "اللعنة على نهر الوقت",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9781927946602-us-300.jpg",
        "BookTitle": "البغاء السري في بغداد",
        "Price": " $ 25.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9781927946527-us-300.jpg",
        "BookTitle": "الجندر ومباني السلطة التفسيرية في الاسلام",
        "Price": " $ 25.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9781927946565-us-300.jpg",
        "BookTitle": "الكنيسة في ظل المسجد",
        "Price": " $ 25.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9781927946503-us-300.jpg",
        "BookTitle": "الأيدولوجية والطوبائية مقدمة في علم اجتماع المعرفة",
        "Price": " $ 25.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9781927946497-us-300.jpg",
        "BookTitle": "انثربوبوجيا الجنس",
        "Price": " $ 25.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9781927946381-us-300.jpg",
        "BookTitle": "اللغتان السومرية والاكدية قواعد-نصوص-مفردات",
        "Price": " $ 20.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9781927946343-us-300.jpg",
        "BookTitle": "المواجهة بين المسيحية الشرقية والاسلام المبكر",
        "Price": " $ 18.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9781927946336-us-300.jpg",
        "BookTitle": "الاخلاق الجنسية والاسلام تأملات نسوية في القرآن والحديث والفقه",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9781927946237-us-300.jpg",
        "BookTitle": "البوذية و الإسلام على طريق الحرير",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9781927946312-us-300.jpg",
        "BookTitle": "النظم الإسلامية بحث في المؤسسات الدولة- الدين- المجتمع",
        "Price": " $ 14.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9781927946305-us-300.jpg",
        "BookTitle": "التاريخ الإقتصادي و الإجتماعي للدولة العباسية",
        "Price": " $ 18.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9781927946329-us-300.jpg",
        "BookTitle": "فلسفة ابن خلدون الإجتماعية تحليل ونقد",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9781927946046-us-300.jpg",
        "BookTitle": "عقوبات العرب في جاهليتها",
        "Price": " $ 7.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9781927946152-us-300.jpg",
        "BookTitle": "الهاجريون",
        "Price": " $ 18.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9781927946060-us-300.jpg",
        "BookTitle": "المعجم المفصل باسماء الملابس عند العرب",
        "Price": " $ 17.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9781927946121-us-300.jpg",
        "BookTitle": "الدولة العباسية",
        "Price": " $ 17.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9781927946091-us-300.jpg",
        "BookTitle": "الاسلام المبكر في اربع نصوص يهودية",
        "Price": " $ 14.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9781927946268-us-300.jpg",
        "BookTitle": "اهل الذمة في صدر الاسلام",
        "Price": " $ 16.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9781927946244-us-300.jpg",
        "BookTitle": "يسوع في التلمود",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9781927946275-us-300.jpg",
        "BookTitle": "الصوفية في الاسلام",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9780992103033-us-300.jpg",
        "BookTitle": "الديانات الشرقية القديمة-الزردشتية-الماسونية",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9780992103040-us-300.jpg",
        "BookTitle": "الطوفان في المصادر-السومرية-البابلية-الآشورية-العبرانية",
        "Price": " $ 9.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9781927946022-us-300.jpg",
        "BookTitle": "الأمومة عند العرب-دراسة في أنماط الأنوثة والنكاح",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9780992103095-us-300.jpg",
        "BookTitle": "مكة في الدراسات الاستشراقية",
        "Price": " $ 14.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9780992103071-us-300.jpg",
        "BookTitle": "دراسات عن أساطير عرب شبه الجزيرة قبل الإسلام",
        "Price": " $ 17.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9780992103064-us-300.jpg",
        "BookTitle": "تاريخ الالحاد في الاسلام",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887562-us-300.jpg",
        "BookTitle": "كنيسة المشرق-التاريخ-العقائد-الجغرافية الدينية",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887432-us-300.jpg",
        "BookTitle": "تاريخ اليهود في بلاد العرب",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887500-us-300.jpg",
        "BookTitle": "المفصل في نشأة نوروز الذهنية الابداعية دراسة في فكرة الاعياد الشرقية",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887579-us-300.jpg",
        "BookTitle": "اليزيديون وأصولهم الدينية ومعابدهم والأديرة المسيحية في كردستان العراق",
        "Price": " $ 9.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887548-us-300.jpg",
        "BookTitle": "المذاهب الاسلامية في تفسير القرآن",
        "Price": " $ 9.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887487-us-300.jpg",
        "BookTitle": "المغول التركيبة الدينية والسياسية",
        "Price": " $ 18.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887470-us-300.jpg",
        "BookTitle": "الحركات الدينية في إيران في القرون الاسلامية الأولى",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887517-us-300.jpg",
        "BookTitle": "كعب الأحبار",
        "Price": " $ 11.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887623-us-300.jpg",
        "BookTitle": "نقد الرواية التاريخية: عصر الرسالة أنموذجاً",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887616-us-300.jpg",
        "BookTitle": "محمد والفتوحات الاسلامية",
        "Price": " $ 14.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9781927946251-us-300.jpg",
        "BookTitle": "علم الفلك",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953880112-us-300.jpg",
        "BookTitle": "علبة الحرب الكبرى",
        "Price": " $ -   "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953883991-us-300.jpg",
        "BookTitle": "الحرب الكبرى تحت ذريعة الحضارة-الابادة",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953883984-us-300.jpg",
        "BookTitle": "الحرب الكبرى تحت ذريعة الحضارة-الحرب الخاطفة",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953884004-us-300.jpg",
        "BookTitle": "الحرب الكبرى تحت ذريعة الحضارة-الى البرية",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9786144585078-us-300.jpg",
        "BookTitle": "حرب الجسد",
        "Price": " $ 11.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887999-us-300.jpg",
        "BookTitle": "حروب العملات",
        "Price": " $ 15.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953887807-us-300.jpg",
        "BookTitle": "الحكام العرب مراحل الصعود والسقوط",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953881591-us-300.jpg",
        "BookTitle": "الجغرافيا على المحك",
        "Price": " $ 7.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882321-us-300.jpg",
        "BookTitle": "صدمة وصمود",
        "Price": " $ 12.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885407-us-300.jpg",
        "BookTitle": "ثمانية من أبطال العرب",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882215-us-300.jpg",
        "BookTitle": "التوحد",
        "Price": " $ 10.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953885483-us-300.jpg",
        "BookTitle": "اتجاهات معاصرة في العلاج النفس",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953882574-us-300.jpg",
        "BookTitle": "الزهير",
        "Price": " $ 8.00 "
      },
      {
        "image": "https://pictures.abebooks.com/isbn/9789953880877-us-300.jpg",
        "BookTitle": "مقتل الاميرة ديانا",
        "Price": " $ 10.00 "
      }
     ]
  
  
  }]);