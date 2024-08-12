const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://loppoma:RnOj%401918@starline.tyqa7.mongodb.net/yourdatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

const mongoose = require('mongoose');
const JournalEntry = require('./JournalEntry'); // Adjust path if needed


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const journalEntries = [
 
      {
        "type": "opinion",
        "heading": "The Rise of Remote Work",
        "image": "news1.jpg",
        "content_s": "Remote work has become a transformative force in the modern workplace. The shift to remote work is reshaping traditional office environments, offering both opportunities and challenges. This opinion piece examines the effects on productivity, work-life balance, and future workplace trends.",
        "content": "<p>The Rise of Remote Work: A Paradigm Shift in Employment</p><p id='p_sub'>Introduction to Remote Work</p>Remote work, once considered a niche employment model, has rapidly become a mainstream option. The flexibility it offers has attracted millions of workers and companies worldwide. With technological advancements and changing attitudes toward work-life balance, remote work is now a viable alternative to traditional office settings.<p id='p_sub'>Technological Enablers of Remote Work</p>The rise of remote work has been significantly driven by advances in technology. High-speed internet, cloud computing, and collaboration tools like Zoom, Slack, and Microsoft Teams have made it easier than ever for employees to work from anywhere. These technologies allow for seamless communication, project management, and file sharing, breaking down the barriers that once confined work to the office.<p id='p_sub'>The Impact of Remote Work on Productivity</p>Contrary to early skepticism, remote work has shown to increase productivity in many cases. Without the distractions of a traditional office environment, many employees find they can focus better and complete tasks more efficiently. Additionally, the time saved on commuting allows workers to start their day earlier or use that time for personal activities, contributing to a better work-life balance.<p id='p_sub'>Challenges of Remote Work</p>Despite its benefits, remote work also comes with its own set of challenges. Employees often struggle with maintaining boundaries between work and personal life, leading to burnout. Additionally, the lack of face-to-face interaction can result in feelings of isolation and a weakened sense of team cohesion. Companies also face difficulties in managing remote teams, ensuring productivity, and maintaining a strong corporate culture.",
        "likes": 210,
        "views": 640,
        "writer": "Alice Turner",
        "date": "2024-07-20"
      },
      {
        "type": "creative",
        "heading": "The Magic of Ancient Ruins",
        "image": "news2.jpg",
        "content_s": "Ancient ruins offer a glimpse into a bygone era filled with magic and wonder. This creative piece imagines a journey through famous ancient ruins, exploring their mystical allure and the stories they tell. Discover how these sites capture the imagination and inspire awe.",
        "content": "Ancient ruins hold a timeless fascination, blending mystery with historical significance. This creative piece takes you on an imaginative journey through some of the world's most intriguing ruins. From the crumbling temples of Angkor Wat to the majestic ruins of Machu Picchu, we explore the stories and legends that surround these ancient sites. Through vivid descriptions and imaginative storytelling, we bring to life the allure and magic of these historical treasures.",
        "likes": 180,
        "views": 550,
        "writer": "Benjamin Lee",
        "date": "2024-07-21"
      },
      {
        "type": "culture",
        "heading": "Exploring Traditional Festivals Around the World",
        "image": "news2.jpg",
        "content_s": "Traditional festivals are a vibrant expression of culture and heritage. This article explores festivals celebrated globally, highlighting their unique traditions, rituals, and significance. Discover how these events foster community spirit and celebrate diverse cultural practices across different regions.",
        "content": "Traditional festivals are a vibrant and integral part of cultural heritage, celebrated with great enthusiasm and joy across the world. From the colorful and lively Carnival in Brazil to the serene and spiritual Diwali in India, these festivals offer a glimpse into the rich tapestry of human traditions and beliefs. They bring communities together, fostering a sense of unity and shared identity. Each festival is unique, reflecting the local customs, history, and values of the people who celebrate it. Through music, dance, food, and rituals, traditional festivals continue to preserve and promote cultural diversity and understanding.",
        "likes": 340,
        "views": 1250,
        "writer": "Emily Johnson",
        "date": "2024-07-27"
      },
      {
        "type": "newsline",
        "heading": "Global Economic Trends in 2024",
        "image": "Nan",
        "content_s": "The global economy is experiencing significant shifts in 2024. This newsline covers key economic trends, including emerging markets, trade dynamics, and investment opportunities. Gain insights into how these trends will impact various industries and regions across the globe.",
        "content": "The global economy is undergoing significant changes in 2024, influenced by various factors including geopolitical developments, technological advancements, and shifting consumer behaviors. This newsline provides an overview of the key economic trends to watch, including emerging markets, trade dynamics, and investment opportunities. We analyze how these trends are expected to impact different industries and regions, offering insights into the future of the global economy.",
        "likes": 220,
        "views": 780,
        "writer": "David Miller",
        "date": "2024-07-23"
      },
      {
        "type": "opinion",
        "heading": "The Importance of Mental Health Awareness",
        "image": "news4.jpg",
        "content_s": "Mental health awareness is crucial for fostering a supportive society. This opinion piece highlights the growing need for mental health support, discusses the stigma surrounding mental health issues, and emphasizes the importance of education and intervention in improving overall well-being.",
        "content": "Mental health awareness has gained increasing importance in recent years, with a growing recognition of its impact on overall well-being. This opinion article discusses the need for greater awareness and support for mental health issues. We explore the stigma surrounding mental health, the benefits of early intervention, and the role of education in promoting mental health. By sharing personal stories and expert insights, we aim to highlight the importance of prioritizing mental health in our communities.",
        "likes": 260,
        "views": 860,
        "writer": "Ella Moore",
        "date": "2024-07-24"
      },
      {
        "type": "creative",
        "heading": "The Enchantment of Urban Gardens",
        "image": "news1.jpg",
        "content_s": "Urban gardens offer a peaceful retreat from city life. This creative article explores the beauty and benefits of urban gardens, from rooftop oases to community green spaces. Learn how these gardens enhance urban living and contribute to environmental sustainability and community well-being.",
        "content": "Urban gardens offer a serene escape from the hustle and bustle of city life. This creative piece explores the charm and benefits of urban gardens, from rooftop oases to community green spaces. We delve into how these gardens contribute to urban biodiversity, provide recreational spaces, and foster community connections. Through vivid descriptions and inspiring stories, we showcase the transformative power of urban gardens and their role in enhancing city living.",
        "likes": 230,
        "views": 710,
        "writer": "Samantha Clark",
        "date": "2024-07-25"
      },
      {
        "type": "culture",
        "heading": "The Influence of Ancient Architecture on Modern Design",
        "image": "Nan",
        "content_s": "Ancient architectural styles continue to inspire modern design. This article explores how historical architectural elements, such as columns and arches, are incorporated into contemporary buildings. Discover the enduring legacy of ancient architecture in shaping modern aesthetics and design principles.",
        "content": "Ancient architecture has left a lasting legacy on modern design, with many contemporary architects drawing inspiration from historical styles. This article explores how ancient architectural elements, such as columns, arches, and facades, are integrated into modern buildings. We examine examples of contemporary architecture that reflect ancient influences and discuss the reasons behind this enduring connection. By highlighting key projects and design principles, we reveal how the past continues to shape the future of architecture.",
        "likes": 240,
        "views": 800,
        "writer": "Lucas Green",
        "date": "2024-07-26"
      },
      {
        "type": "newsline",
        "heading": "Advances in Sustainable Agriculture",
        "image": "news4.jpg",
        "content_s": "Innovations in sustainable agriculture are paving the way for eco-friendly practices. This newsline covers new developments in farming technology, including precision agriculture and organic methods. Explore how these advances contribute to food security and environmental conservation.",
        "content": "Sustainable agriculture is becoming increasingly important as we seek to balance food production with environmental conservation. This newsline covers recent breakthroughs in sustainable agricultural practices, including new technologies, methods, and policies. We highlight innovations such as precision farming, organic techniques, and regenerative agriculture, and discuss their potential to improve food security and reduce environmental impact.",
        "likes": 250,
        "views": 850,
        "writer": "Olivia Johnson",
        "date": "2024-07-27"
      },
      {
        "type": "creative",
        "heading": "The Wonders of the Night Sky",
        "image": "news2.jpg",
        "content_s": "The night sky offers a breathtaking view of celestial wonders. This creative article delves into the beauty and mystery of stargazing, exploring constellations, planets, and deep space phenomena. Experience the awe and inspiration of the cosmos through imaginative storytelling.",
        "content": "The night sky has long captivated human imagination, with its stars, planets, and celestial phenomena. This creative article takes you on a journey through the wonders of the night sky, blending science with imaginative storytelling. We explore the beauty of constellations, the mysteries of deep space, and the allure of stargazing. Through evocative descriptions and poetic imagery, we bring the night sky to life and invite readers to experience its magic.",
        "likes": 190,
        "views": 720,
        "writer": "James Brown",
        "date": "2024-07-28"
      },
      {
        "type": "culture",
        "heading": "The Revival of Ancient Ceramics",
        "image": "news4.jpg",
        "content_s": "Ancient ceramic techniques are being revived in contemporary art. This article explores the resurgence of traditional ceramics, featuring artisans who blend historical methods with modern design. Discover how these ancient techniques continue to inspire and influence today's craft.",
        "content": "Ancient ceramic techniques are experiencing a revival as contemporary artists and craftsmen seek to reconnect with traditional practices. This article explores the resurgence of ancient ceramics, including methods such as hand-coiling, slip-casting, and glaze techniques. We feature artisans who blend historical craftsmanship with modern design sensibilities, creating unique and culturally rich works. Through interviews and showcases, we reveal how these ancient techniques inspire and influence the art of today.",
        "likes": 230,
        "views": 740,
        "writer": "Sophia Martinez",
        "date": "2024-07-29"
      },
      {
        "type": "newsline",
        "heading": "The Future of Electric Vehicles",
        "image": "Nan",
        "content_s": "Electric vehicles (EVs) are shaping the future of transportation. This newsline discusses the latest advancements in EV technology, including battery improvements and charging infrastructure. Explore how these innovations are driving the shift towards a more sustainable transportation system.",
        "content": "Electric vehicles (EVs) are at the forefront of transforming the transportation sector. This newsline covers the latest advancements in EV technology, including enhancements in battery performance, charging infrastructure, and energy efficiency. We discuss how these innovations are contributing to a more sustainable and eco-friendly transportation system. By examining industry trends and future projections, we provide insights into the impact of EVs on the environment and the automotive market.",
        "likes": 260,
        "views": 830,
        "writer": "Liam Harris",
        "date": "2024-07-30"
      },
      {
        "type": "creative",
        "heading": "Journeys Through Fantasy Worlds",
        "image": "news2.jpg",
        "content_s": "Embark on epic quests through fantastical realms in this creative article. From enchanted forests to mystical mountains, discover how vivid storytelling brings imaginary worlds to life. Experience the thrill and wonder of fantasy through richly crafted narratives and imaginative settings.",
        "content": "Journeying through fantasy worlds offers an escape into realms of imagination and wonder. This creative piece explores various fantastical settings, from shimmering forests to towering mountains. Through evocative storytelling and richly crafted scenes, we invite readers to lose themselves in epic quests and magical adventures. Discover how these imaginative worlds capture the essence of fantasy and inspire awe through engaging narratives and vibrant descriptions.",
        "likes": 270,
        "views": 860,
        "writer": "Mia Anderson",
        "date": "2024-07-31"
      },
      {
        "type": "newsline",
        "heading": "Breakthroughs in Renewable Energy Storage",
        "image": "news2.jpg",
        "content_s": "New developments in energy storage technology are paving the way for more sustainable energy solutions. This newsline covers recent advancements in battery technology and storage systems, exploring their impact on energy efficiency and grid stability.",
        "content": "Renewable energy storage is a critical component of achieving a sustainable energy future. This newsline highlights recent breakthroughs in energy storage technology, including improvements in battery design and efficiency. We examine how these advancements are addressing the challenges of energy intermittency and supporting a more stable and reliable energy grid. By exploring the latest innovations, we provide insights into the future of energy storage and its role in the renewable energy landscape.",
        "likes": 270,
        "views": 830,
        "writer": "Grace Lee",
        "date": "2024-08-01"
      },
      {
        "type": "opinion",
        "heading": "The Impact of Artificial Intelligence on Jobs",
        "image": "news4.jpg",
        "content_s": "Examining the effects of AI technology on employment and the workforce. This opinion piece analyzes the potential for job displacement, new job opportunities, and the need for reskilling in the face of AI advancements. Discover how AI is reshaping the job market.",
        "content": "Artificial intelligence (AI) is reshaping industries and the job market. This opinion piece delves into the effects of AI on employment, exploring both the potential for job displacement and the creation of new job categories. We discuss the need for reskilling and upskilling to adapt to the changing job landscape. By analyzing various sectors and trends, we offer insights into how AI is transforming work and what strategies can help navigate these changes.",
        "likes": 230,
        "views": 760,
        "writer": "Zoe Wilson",
        "date": "2024-08-02"
      },
      {
        "type": "creative",
        "heading": "The Wonders of Underwater Exploration",
        "image": "news1.jpg",
        "content_s": "Diving into the mysteries and marvels of the underwater world. This creative piece explores marine life and underwater landscapes, highlighting the beauty and complexity of ocean exploration. Experience the thrill of discovering new aquatic wonders and ecosystems.",
        "content": "Underwater exploration unveils a world of incredible beauty and mystery. This creative article delves into the wonders of marine life and underwater landscapes, from vibrant coral reefs to the depths of the ocean. We highlight the challenges and rewards of deep-sea exploration, showcasing the diversity of marine ecosystems and the thrill of discovery. Through engaging storytelling and stunning imagery, we bring the underwater world to life and inspire awe for its hidden marvels.",
        "likes": 250,
        "views": 790,
        "writer": "Henry Adams",
        "date": "2024-08-03"
      },
      {
        "type": "culture",
        "heading": "The Legacy of Ancient Mythologies",
        "image": "news4.jpg",
        "content_s": "Exploring how ancient mythologies continue to influence modern culture. This article examines the lasting impact of myths from Greek, Egyptian, and Norse traditions on contemporary art, literature, and media. Discover the relevance of these ancient stories in today's world.",
        "content": "Ancient mythologies have a profound and lasting influence on modern culture. This article explores how myths from Greek, Egyptian, and Norse traditions continue to inspire contemporary art, literature, and media. We discuss the themes and symbols that have persisted through time and how they are reinterpreted in modern storytelling. By tracing the legacy of these ancient myths, we uncover their ongoing relevance and significance in shaping cultural narratives today.",
        "likes": 270,
        "views": 810,
        "writer": "Isabella White",
        "date": "2024-08-04"
      },
      {
        "type": "newsline",
        "heading": "New Trends in Digital Marketing",
        "image": "news1.jpg",
        "content_s": "The latest trends and strategies shaping the digital marketing landscape. This newsline covers advancements in data analytics, social media, and content marketing. Learn how businesses are adapting to new marketing trends and optimizing their digital strategies.",
        "content": "Digital marketing is evolving rapidly, with new trends and technologies shaping the way businesses engage with consumers. This newsline highlights the latest developments in data analytics, social media strategies, and content marketing. We examine how these trends are influencing marketing practices and offer insights into how companies can leverage these innovations to achieve their objectives. From personalized marketing to advanced analytics, we explore the tools and strategies driving the future of digital marketing.",
        "likes": 280,
        "views": 820,
        "writer": "Michael Turner",
        "date": "2024-08-05"
      },
    
  
];

async function insertData() {
  try {
    await mongoose.connection.dropCollection('journalentries')
    await JournalEntry.insertMany(journalEntries);
    console.log('Data successfully inserted!');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    mongoose.disconnect();
  }
}

insertData();