// Destructure React hooks for browser use
const { useState, useEffect } = React;

// Add custom CSS for sliders
const sliderStyles = `
    .slider::-webkit-slider-thumb {
        appearance: none;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: #ea580c;
        cursor: pointer;
        box-shadow: 0 0 10px rgba(234, 88, 12, 0.3);
    }
    
    .slider::-moz-range-thumb {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: #ea580c;
        cursor: pointer;
        border: none;
        box-shadow: 0 0 10px rgba(234, 88, 12, 0.3);
    }
    
    .slider::-webkit-slider-track {
        background: #374151;
        border-radius: 8px;
        height: 8px;
    }
    
    .slider::-moz-range-track {
        background: #374151;
        border-radius: 8px;
        height: 8px;
        border: none;
    }
`;

    // Main App Component
    const App = () => {
        const [view, setView] = useState('nootropics'); // 'nootropics', 'binauralBeats', 'pomodoro', 'training'
        const [selectedGoal, setSelectedGoal] = useState(null);
        const [showModal, setShowModal] = useState(false); // State for modal visibility
        const [selectedNootropicForModal, setSelectedNootropicForModal] = useState(null); // State for nootropic in modal

        // Telegram Web App Integration
        useEffect(() => {
            // Check if running in Telegram Web App
            if (window.Telegram && window.Telegram.WebApp) {
                const tg = window.Telegram.WebApp;
                tg.ready();
                tg.expand();
                
                // Set theme colors
                tg.setHeaderColor('#ea580c');
                tg.setBackgroundColor('#111827');
                
                // Enable closing confirmation
                tg.enableClosingConfirmation();
                
                console.log('Telegram Web App initialized');
            }
        }, []);

    // Navigation component
    const Navigation = () => (
        <nav className="bg-gray-900 border-b border-orange-800 sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-orange-400">Productivity Hub</h1>
                    </div>
                    <div className="flex space-x-1">
                        <NavButton
                            active={view === 'nootropics'}
                            onClick={() => setView('nootropics')}
                            icon="🧠"
                            label="Nootropics"
                        />
                        <NavButton
                            active={view === 'binauralBeats'}
                            onClick={() => setView('binauralBeats')}
                            icon="🎵"
                            label="Binaural Beats"
                        />
                        <NavButton
                            active={view === 'pomodoro'}
                            onClick={() => setView('pomodoro')}
                            icon="⏰"
                            label="Pomodoro"
                        />
                        <NavButton
                            active={view === 'training'}
                            onClick={() => setView('training')}
                            icon="💪"
                            label="Training"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );

    const NavButton = ({ active, onClick, icon, label }) => (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                active
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-orange-400 hover:bg-gray-800'
            }`}
        >
            <span className="text-lg">{icon}</span>
            <span className="hidden sm:inline">{label}</span>
        </button>
    );

    // Data for Nootropic Library and Stacks
    const nootropicsData = [
        {
            id: 'caffeine',
            name: 'Caffeine',
            description: 'The world\'s most widely consumed psychoactive substance. It blocks adenosine receptors in the brain, preventing feelings of tiredness, and stimulates dopamine and norepinephrine production. Provides acute alertness and energy.',
            formula: 'C8H10N4O2',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Caffeine+Structure', // Dark theme placeholder with red-orange text
            effects: ['Alertness', 'Energy', 'Focus'],
            category: 'Stimulant',
            mechanisms: 'Adenosine receptor antagonism, dopamine/norepinephrine modulation',
            considerations: 'Potential for jitters, anxiety, and sleep disruption with high doses. Tolerance can develop.'
        },
        {
            id: 'modafinil',
            name: 'Modafinil',
            description: 'A prescription wakefulness-promoting agent (eugeroic) used to treat narcolepsy, sleep apnea, and shift work sleep disorder. It is often used off-label for cognitive enhancement, improving alertness, focus, and executive function.',
            formula: 'C15H15NO2S',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Modafinil+Structure',
            effects: ['Wakefulness', 'Alertness', 'Focus', 'Executive Function'],
            category: 'Stimulant (Prescription)',
            mechanisms: 'Exact mechanism is unclear, but it modulates dopamine, norepinephrine, serotonin, histamine, and orexin systems without significant peripheral stimulant effects.',
            considerations: 'Prescription-only medication. Potential for dependence and abuse. Side effects include headache, nausea, anxiety, insomnia, and rare but serious skin reactions. Should only be used under medical supervision.'
        },
        {
            id: 'adderall',
            name: 'Adderall (Amphetamine/Dextroamphetamine)',
            description: 'A prescription central nervous system stimulant used primarily to treat ADHD and narcolepsy. It significantly increases dopamine and norepinephrine levels in the brain, leading to enhanced attention, focus, and impulse control.',
            formula: 'C9H13N (Amphetamine)',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Adderall+Structure',
            effects: ['Attention', 'Focus', 'Impulse Control', 'Wakefulness'],
            category: 'Stimulant (Prescription)',
            mechanisms: 'Increases the release of dopamine and norepinephrine, and blocks their reuptake in the brain.',
            considerations: 'Prescription-only medication, classified as a Schedule II controlled substance due to high potential for abuse and dependence. Side effects include increased heart rate/blood pressure, insomnia, anxiety, psychosis, and addiction. Should ONLY be used under strict medical supervision for diagnosed conditions.'
        },
        {
            id: 'lTheanine',
            name: 'L-Theanine',
            description: 'An amino acid found naturally in green and black teas. It promotes a state of relaxation without inducing sedation and increases alpha brainwaves, associated with enhanced creativity and "relaxed alertness".',
            formula: 'C7H14N2O3',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=L-Theanine+Structure',
            effects: ['Relaxed Alertness', 'Creativity', 'Calm Focus', 'Reduces jitters'],
            category: 'Amino Acid',
            mechanisms: 'Increases alpha brain waves, modulates neurotransmitters like GABA and serotonin.',
            considerations: 'Generally well-tolerated. May cause mild drowsiness in some individuals, best paired with stimulants for balanced effects.'
        },
        {
            id: 'creatine',
            name: 'Creatine',
            description: 'Widely known for muscle growth, but also crucial for fueling the brain\'s energy systems. It helps optimize ATP production, the brain\'s primary energy currency.',
            formula: 'C4H9N3O2',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Creatine+Structure',
            effects: ['Memory', 'Focus', 'Neuroprotection', 'Enhanced Mental Performance'],
            category: 'Metabolic Support',
            mechanisms: 'Replenishes ATP, buffering energy supply in brain cells.',
            considerations: 'Ensure adequate hydration. May cause mild gastrointestinal discomfort in some individuals.'
        },
        {
            id: 'omega3',
            name: 'Omega-3 Fatty Acids (DHA/EPA)',
            description: 'Essential polyunsaturated fats abundant in fatty fish. Indispensable for optimal brain structure, function, and neuroplasticity. DHA is particularly vital for brain development.',
            formula: 'Complex, Varies (e.g., DHA: C22H32O2)',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Omega-3+Complex+Structure',
            effects: ['Brain Development', 'Cognitive Protection', 'Anti-inflammatory', 'Neuroplasticity'],
            category: 'Essential Fatty Acid',
            mechanisms: 'Integrates into cell membranes, reduces inflammation, supports neurotransmitter function.',
            considerations: 'Choose high-quality, mercury-free sources. May cause fishy aftertaste or mild GI upset.'
        },
        {
            id: 'bacopaMonnieri',
            name: 'Bacopa Monnieri',
            description: 'A revered herb in Ayurvedic medicine, traditionally used to enhance memory and intelligence. It promotes neuroplasticity, including neurogenesis and synaptogenesis. Effects build over several weeks of consistent use.',
            formula: 'Contains Bacosides (Complex)',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Bacopa+Complex+Structure',
            effects: ['Memory', 'Learning', 'Stress Reduction', 'Anxiety Relief', 'Neuroplasticity'],
            category: 'Herbal Adaptogen',
            mechanisms: 'Modulates neurotransmitters (acetylcholine, serotonin, dopamine), promotes dendrite proliferation, antioxidant.',
            considerations: 'Effects are cumulative; consistent daily use for weeks is required. May cause mild GI upset, fatigue.'
        },
        {
            id: 'ashwagandha',
            name: 'Ashwagandha',
            description: 'An adaptogenic plant used in Ayurvedic medicine, helping the body manage stress more effectively. It reduces cortisol levels and improves sleep quality, indirectly benefiting cognitive function.',
            formula: 'Contains Withanolides (Complex)',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Ashwagandha+Complex+Structure',
            effects: ['Stress/Anxiety Reduction', 'Sleep Improvement', 'Memory', 'Cognitive Capacity', 'HPA Axis Regulation'],
            category: 'Herbal Adaptogen',
            mechanisms: 'Reduces cortisol, modulates GABA and serotonin, supports HPA axis function.',
            considerations: 'Generally well-tolerated, but can cause mild GI upset. Avoid if pregnant or breastfeeding, or with certain autoimmune conditions.'
        },
        {
            id: 'lionsMane',
            name: 'Lion\'s Mane Mushroom',
            description: 'A unique fungus with a history in East Asian traditional medicine. It may possess neuroprotective effects and stimulate Nerve Growth Factor (NGF), supporting neurogenesis and nerve health.',
            formula: 'Contains Hericenones & Erinacines (Complex)',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Lion%27s+Mane+Complex+Structure',
            effects: ['Neuroprotection', 'Mood Improvement', 'Cognition', 'Nerve Development'],
            category: 'Medicinal Mushroom',
            mechanisms: 'Stimulates NGF and BDNF, promoting neuronal growth and repair. Anti-inflammatory.',
            considerations: 'Generally safe. May cause mild stomach discomfort. Potential interaction with blood thinners.'
        },
        {
            id: 'piracetam',
            name: 'Piracetam',
            description: 'The first synthesized nootropic. It enhances communication between brain hemispheres, reduces inhibitory GABA, and increases oxygen levels in brain tissue. Effects can be subtle for healthy individuals, more pronounced in those with cognitive decline.',
            formula: 'C6H10N2O2',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Piracetam+Structure',
            effects: ['Memory', 'Learning', 'Attention', 'Brain Communication'],
            category: 'Racetam (Synthetic)',
            mechanisms: 'Positive allosteric modulation of AMPA receptors, improves membrane fluidity.',
            considerations: 'Not FDA approved as a dietary supplement in the US. Often stacked with choline donors to prevent headaches. Legal status varies by country.'
        },
        {
            id: 'coluracetam',
            name: 'Coluracetam',
            description: 'A racetam that specifically increases choline uptake, especially in damaged neurons, leading to elevated acetylcholine levels. It also enhances AMPA potentiation, crucial for cognitive function. Research chemical status.',
            formula: 'C19H21N3O3S',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Coluracetam+Structure',
            effects: ['Memory', 'Attention', 'Alertness'],
            category: 'Racetam (Synthetic)',
            mechanisms: 'High affinity choline uptake (HACU) enhancer, AMPA receptor potentiation.',
            considerations: 'Research chemical, limited human studies. Not for human consumption. Potential side effects similar to other racetams.'
        },
        {
            id: 'alphaGPC',
            name: 'Alpha-GPC',
            description: 'A compound that serves as a precursor to acetylcholine, providing the raw materials needed for synthesis of this crucial neurotransmitter. Readily crosses the blood-brain barrier. Essential for balancing racetam stacks.',
            formula: 'C8H20NO6P',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Alpha-GPC+Structure',
            effects: ['Memory', 'Learning', 'Focus'],
            category: 'Choline Donor',
            mechanisms: 'Directly increases acetylcholine synthesis and release.',
            considerations: 'Generally safe. Essential when using racetams to prevent choline-depletion headaches.'
        },
        {
            id: 'citicoline',
            name: 'Citicoline (CDP-Choline)',
            description: 'Another compound that provides choline, a precursor to acetylcholine. Supports brain function and is involved in phospholipid synthesis, essential for cell membrane health. May also increase dopamine receptor density.',
            formula: 'C14H26N4O11P2',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Citicoline+Structure',
            effects: ['Memory', 'Brain Function', 'Learning', 'Focus'],
            category: 'Choline Donor',
            mechanisms: 'Increases acetylcholine synthesis, supports phospholipid synthesis for neuronal membranes, may increase dopamine receptor density.',
            considerations: 'Generally well-tolerated. Can cause mild GI upset, headache. Potential for stimulant-like effects at high doses.'
        },
        {
            id: 'phenylpiracetam',
            name: 'Phenylpiracetam',
            description: 'A more potent derivative of Piracetam, known for its stimulant-like effects on focus, motivation, and physical performance. Users often report increased energy and drive. Often used for demanding cognitive tasks.',
            formula: 'C12H14N2O2',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Phenylpiracetam+Structure',
            effects: ['Focus', 'Motivation', 'Physical Performance', 'Energetic Drive'],
            category: 'Racetam (Synthetic)',
            mechanisms: 'Modulates dopamine and norepinephrine, affects acetylcholine system. Has a phenyl group allowing easier blood-brain barrier crossing.',
            considerations: 'Potent; start with low doses. May cause insomnia or overstimulation. Potential for tolerance development. Not FDA approved.'
        },
        {
            id: 'nalt',
            name: 'N-Acetyl L-Tyrosine (NALT)',
            description: 'A highly bioavailable form of L-Tyrosine, an amino acid precursor to dopamine and norepinephrine. Useful for maintaining cognitive performance under stressful or demanding situations, as stress depletes these neurotransmitters.',
            formula: 'C11H13NO5',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=NALT+Structure',
            effects: ['Cognitive Performance Under Stress', 'Dopamine Support', 'Focus', 'Resilience'],
            category: 'Amino Acid',
            mechanisms: 'Provides building blocks for dopamine and norepinephrine synthesis, which are critical for stress response and cognitive function.',
            considerations: 'Most effective when neurotransmitter levels are depleted (e.g., during stress, sleep deprivation). Less noticeable effects in a rested state.'
        },
        {
            id: 'rhodiolaRosea',
            name: 'Rhodiola Rosea',
            description: 'An adaptogenic herb that helps the body adapt to stress, reducing fatigue and improving mood and cognitive performance, especially under stressful conditions. Also known for endurance support and mental clarity.',
            formula: 'Contains Rosavins & Salidroside (Complex)',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Rhodiola+Complex+Structure',
            effects: ['Stress Reduction', 'Fatigue Reduction', 'Mood Improvement', 'Cognitive Performance Under Stress', 'Endurance'],
            category: 'Herbal Adaptogen',
            mechanisms: 'Influences monoamine neurotransmitters (dopamine, serotonin, norepinephrine) and reduces stress hormone (cortisol) response.',
            considerations: 'Generally well-tolerated. May cause overstimulation if taken too late in the day. Look for extracts standardized for rosavins and salidroside.'
        },
        {
            id: 'vinpocetine',
            name: 'Vinpocetine',
            description: 'A synthetic derivative of the Vinca minor plant. It acts as a vasodilator, widening blood vessels to enhance cerebral blood flow, increasing delivery of oxygen and nutrients to brain cells. May also have neuroprotective properties.',
            formula: 'C22H26N2O2',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Vinpocetine+Structure',
            effects: ['Increased Cerebral Blood Flow', 'Oxygen Delivery', 'Nutrient Delivery to Brain', 'Neuroprotection'],
            category: 'Vascular Agent (Synthetic)',
            mechanisms: 'Increases ATP production in brain, inhibits phosphodiesterase type 1 (PDE1), improving blood flow.',
            considerations: 'Avoid if on blood thinners or blood pressure medication. Not recommended for pregnant or breastfeeding women. Mild side effects like dizziness, nausea, stomach ache.'
        },
        {
            id: 'magnesiumLThreonate',
            name: 'Magnesium L-Threonate',
            description: 'A unique form of magnesium specifically designed to cross the blood-brain barrier effectively. It is thought to enhance synaptic plasticity and improve memory, particularly beneficial for brain magnesium levels and sleep quality.',
            formula: 'C8H14MgO10',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Mag+L-Threonate+Structure',
            effects: ['Memory Improvement', 'Synaptic Plasticity', 'Brain Magnesium Levels', 'Sleep Quality'],
            category: 'Mineral',
            mechanisms: 'Increases magnesium concentrations in the brain, supporting synaptic density and plasticity.',
            considerations: 'Generally well-tolerated. High doses of any magnesium can cause GI issues. Often taken in the evening to aid sleep.'
        },
        {
            id: 'vitaminD3',
            name: 'Vitamin D3 (Cholecalciferol)',
            description: 'Often called the "sunshine vitamin," Vitamin D3 is crucial for bone health, immune function, and plays a significant role in various endocrine functions, indirectly supporting hormonal balance. Many people are deficient.',
            formula: 'C27H44O',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Vitamin+D3+Structure',
            effects: ['Immune Support', 'Bone Health', 'Mood Regulation', 'Indirect Hormonal Support'],
            category: 'Vitamin',
            mechanisms: 'Acts as a prohormone, influencing gene expression in various tissues, including those involved in hormone production and immune response.',
            considerations: 'Best taken with a fatty meal for absorption. Monitor levels with blood tests. High doses can lead to toxicity.'
        },
        {
            id: 'zinc',
            name: 'Zinc',
            description: 'An essential trace mineral vital for over 300 enzymatic reactions in the body. It plays a critical role in immune function, protein synthesis, DNA repair, and is important for healthy testosterone production and overall endocrine function. Common deficiency.',
            formula: 'Zn',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Zinc+Structure',
            effects: ['Immune Support', 'Hormonal Balance', 'Cell Growth & Repair', 'Metabolism'],
            category: 'Mineral',
            mechanisms: 'Cofactor for numerous enzymes, involved in testosterone synthesis, immune cell function, and antioxidant defense.',
            considerations: 'Avoid high doses, as it can interfere with copper absorption. Best taken with food to reduce nausea. Common deficiency, especially in vegetarians.'
        },
        {
            id: 'tongkatAli',
            name: 'Tongkat Ali (Eurycoma longifolia)',
            description: 'An herbal remedy from Southeast Asia, traditionally used to enhance male vitality and libido. It is believed to support healthy testosterone levels by reducing cortisol (stress hormone) and influencing specific pathways, improving the testosterone-to-cortisol ratio.',
            formula: 'Contains Quassinoids (Complex)',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Tongkat+Ali+Complex+Structure',
            effects: ['Male Vitality', 'Libido', 'Stress Reduction', 'Mood'],
            category: 'Herbal Extract',
            mechanisms: 'Increases free testosterone by reducing sex hormone-binding globulin (SHBG) and inhibiting aromatase. Reduces stress hormones.',
            considerations: 'May cause insomnia or irritability in some individuals. Start with lower doses. Effects are often subtle and require consistent use.'
        },
        {
            id: 'dim',
            name: 'DIM (Diindolylmethane)',
            description: 'A compound naturally found in cruciferous vegetables like broccoli and cauliflower. It helps promote healthy estrogen metabolism by converting "bad" estrogens into "good" forms, contributing to hormonal balance for both men and women. Supports cellular health.',
            formula: 'C9H9NO',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=DIM+Structure',
            effects: ['Estrogen Metabolism', 'Hormonal Balance', 'Antioxidant', 'Cellular Health'],
            category: 'Metabolite',
            mechanisms: 'Promotes beneficial estrogen metabolites (2-hydroxy estrogens) over less favorable ones (16-hydroxy estrogens).',
            considerations: 'May cause urine darkening (harmless). Avoid if pregnant or breastfeeding. Consult a doctor if on hormonal medications.'
        },
        {
            id: 'pterostilbene',
            name: 'Pterostilbene',
            description: 'A stilbenoid, structurally similar to resveratrol, found in blueberries. It is a powerful antioxidant and anti-inflammatory agent, believed to have neuroprotective effects and support cellular health. Higher bioavailability than resveratrol.',
            formula: 'C14H12O3',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Pterostilbene+Structure',
            effects: ['Antioxidant', 'Anti-inflammatory', 'Neuroprotection', 'Cellular Health'],
            category: 'Flavonoid/Polyphenol',
            mechanisms: 'Activates sirtuins (longevity pathways), reduces oxidative stress, modulates inflammatory pathways.',
            considerations: 'Generally safe. Research is ongoing; long-term effects not fully understood. May interact with blood thinners.'
        },
        {
            id: 'sulbutiamine',
            name: 'Sulbutiamine',
            description: 'A synthetic derivative of Thiamine (Vitamin B1). It is lipophilic, allowing it to cross the blood-brain barrier more effectively than Thiamine, and is often used for reducing fatigue, improving memory, and boosting mood. May enhance cholinergic and dopaminergic systems.',
            formula: 'C32H46N8O6S2',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Sulbutiamine+Structure',
            effects: ['Fatigue Reduction', 'Memory', 'Alertness', 'Mood'],
            category: 'Synthetic Vitamin Derivative',
            mechanisms: 'Increases thiamine levels in the brain, modulates cholinergic and dopaminergic systems.',
            considerations: 'Short-term use is generally safe. Potential for mild overstimulation or sleep disturbances. Tolerance may develop with prolonged daily use, cycling often recommended.'
        },
        {
            id: 'ginkgoBiloba',
            name: 'Ginkgo Biloba',
            description: 'One of the oldest living tree species, its leaves are used in traditional medicine. It is known to improve blood flow to the brain, act as an antioxidant, and may support memory and cognitive speed. Often used for age-related cognitive decline.',
            formula: 'Contains Flavonoids & Terpenoids (Complex)',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Ginkgo+Complex+Structure',
            effects: ['Cerebral Blood Flow', 'Memory', 'Antioxidant', 'Cognitive Speed'],
            category: 'Herbal Extract',
            mechanisms: 'Acts as a vasodilator, improves blood rheology, scavenges free radicals, inhibits platelet aggregation.',
            considerations: 'May interact with blood thinners. Mild side effects include headache, nausea, dizziness. Effects may take weeks to become noticeable.'
        },
        {
            id: 'semax',
            name: 'Semax',
            description: 'A synthetic peptide derived from a fragment of ACTH. It is extensively studied for its nootropic and neuroprotective effects, including improving memory, attention, and executive function. Often administered intranasally. Classified as a research chemical outside clinical settings.',
            formula: 'C37H51N9O10S',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Semax+Structure',
            effects: ['Memory', 'Attention', 'Executive Function', 'Neuroprotection', 'Mood Improvement'],
            category: 'Peptide (Synthetic)',
            mechanisms: 'Modulates brain-derived neurotrophic factor (BDNF), enhances activity of brain neurotransmitter systems (dopamine, serotonin, acetylcholine).',
            considerations: 'Research chemical status. Not approved for human use outside of specific countries (e.g., Russia). Limited long-term safety data.'
        },
        {
            id: 'selank',
            name: 'Selank',
            description: 'A synthetic peptide with anxiolytic (anti-anxiety) and nootropic properties. It is believed to modulate the immune system and increase levels of brain-derived neurotrophic factor (BDNF), supporting neuroplasticity and stress resilience. Often administered intranasally.',
            formula: 'C33H57N11O9',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Selank+Structure',
            effects: ['Anxiety Reduction', 'Stress Resilience', 'Cognitive Enhancement', 'Mood', 'Immune Modulation'],
            category: 'Peptide (Synthetic)',
            mechanisms: 'Modulates GABAergic and serotonergic systems, increases BDNF, influences immune-related peptides.',
            considerations: 'Research chemical status. Not approved for human use outside of specific countries. Limited long-term safety data.'
        },
        {
            id: 'bpc157',
            name: 'BPC-157',
            description: 'A synthetic peptide derived from human gastric juice. While primarily known for its regenerative and healing properties across various tissues (muscles, tendons, gut), it also exhibits neuroprotective effects and may indirectly support brain health by reducing systemic inflammation. Classified as a research chemical.',
            formula: 'C62H98N16O22',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=BPC-157+Structure',
            effects: ['Tissue Healing', 'Anti-inflammatory', 'Neuroprotection (indirect)', 'Gut Health'],
            category: 'Peptide (Synthetic)',
            mechanisms: 'Promotes angiogenesis, modulates growth factors and nitric oxide synthesis, anti-inflammatory.',
            considerations: 'Research chemical status. Not approved for human use. Limited clinical data on long-term effects. Often administered via injection or orally.'
        },
        {
            id: 'vitaminBComplex',
            name: 'Vitamin B Complex (Overview)',
            description: 'A group of essential water-soluble vitamins vital for cellular metabolism, energy production, and the proper functioning of the nervous system. Individual B vitamins play distinct yet interconnected roles in brain health.',
            formula: 'Complex, Varies',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Vitamin+B+Complex',
            effects: ['Overall Energy Metabolism', 'Neurotransmitter Support', 'Nervous System Health'],
            category: 'Vitamin',
            mechanisms: 'Co-factors in enzymatic reactions critical for energy production, DNA synthesis, and neurotransmitter formation.',
            considerations: 'While generally safe, high doses of individual B vitamins can have specific adverse effects. Best obtained from a balanced diet and/or a well-formulated complex unless a specific deficiency is present.'
        },
        {
            id: 'vitaminB1',
            name: 'Vitamin B1 (Thiamine)',
            description: 'Essential for energy metabolism, converting carbohydrates into energy. Crucial for nerve function and brain health. Deficiency can lead to cognitive impairment (e.g., Wernicke-Korsakoff syndrome).',
            formula: 'C12H17N4OS+',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Thiamine+Structure',
            effects: ['Energy Production', 'Nerve Function', 'Cognitive Clarity'],
            category: 'Vitamin',
            mechanisms: 'Key coenzyme in glucose metabolism (e.g., pyruvate dehydrogenase, alpha-ketoglutarate dehydrogenase). Essential for neurotransmitter synthesis.',
            considerations: 'Water-soluble, excess is excreted. Generally non-toxic even at high doses. Deficiency more common in alcoholics or those with malabsorption issues.'
        },
        {
            id: 'vitaminB2',
            name: 'Vitamin B2 (Riboflavin)',
            description: 'Plays a central role in energy metabolism and cellular respiration. Important for healthy vision, skin, and nervous system function. Acts as a precursor for FAD and FMN coenzymes.',
            formula: 'C17H20N4O6',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Riboflavin+Structure',
            effects: ['Energy Production', 'Cellular Respiration', 'Antioxidant Support'],
            category: 'Vitamin',
            mechanisms: 'Precursor to flavin adenine dinucleotide (FAD) and flavin mononucleotide (FMN), which are crucial for electron transport chain and redox reactions.',
            considerations: 'Water-soluble. Generally safe. High doses may cause bright yellow urine (harmless). Light sensitive, so store supplements in opaque containers.'
        },
        {
            id: 'vitaminB3',
            name: 'Vitamin B3 (Niacin / Nicotinic Acid / Niacinamide)',
            description: 'Crucial for energy metabolism, DNA repair, and antioxidant defense. Used therapeutically to lower cholesterol. Can cause a "niacin flush" (redness, itching, tingling) depending on the form.',
            formula: 'C6H5NO2 (Nicotinic Acid)',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Niacin+Structure',
            effects: ['Energy Metabolism', 'DNA Repair', 'Antioxidant Defense', 'Cholesterol Regulation'],
            category: 'Vitamin',
            mechanisms: 'Precursor to NAD+ and NADP+, critical coenzymes in over 400 enzymatic reactions involved in energy production and redox processes.',
            considerations: 'Nicotinic acid (one form of B3) can cause a temporary "flush." Niacinamide (another form) generally does not. High doses can cause liver damage, especially with sustained-release forms. Consult doctor before high-dose use.'
        },
        {
            id: 'vitaminB5',
            name: 'Vitamin B5 (Pantothenic Acid)',
            description: 'Essential for the synthesis of coenzyme A (CoA), which is vital for fatty acid metabolism and the synthesis of neurotransmitters, hormones, and hemoglobin. Supports adrenal function and stress response.',
            formula: 'C9H17NO5',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Pantothenic+Acid+Structure',
            effects: ['Energy Metabolism', 'Neurotransmitter Synthesis', 'Hormone Production', 'Stress Response'],
            category: 'Vitamin',
            mechanisms: 'Component of coenzyme A, essential for the Krebs cycle (energy production), and acetylcholine synthesis.',
            considerations: 'Water-soluble. Generally considered very safe, even at high doses. Deficiency is rare due to its widespread presence in foods.'
        },
        {
            id: 'vitaminB6',
            name: 'Vitamin B6 (Pyridoxine / P5P)',
            description: 'Crucial for neurotransmitter synthesis (dopamine, serotonin, GABA), amino acid metabolism, and red blood cell formation. Supports cognitive function and mood regulation. Pyridoxal 5\'-phosphate (P5P) is its active form.',
            formula: 'C8H11NO3 (Pyridoxine)',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Pyridoxine+Structure',
            effects: ['Neurotransmitter Synthesis', 'Mood Regulation', 'Cognitive Function', 'Energy Metabolism'],
            category: 'Vitamin',
            mechanisms: 'Coenzyme for over 100 enzymatic reactions, including decarboxylation for neurotransmitter synthesis and transamination for amino acid metabolism.',
            considerations: 'Water-soluble. High doses (over ~200mg/day long-term) can cause peripheral neuropathy (nerve damage), though this is usually reversible upon discontinuation. Best used in active P5P form.'
        },
        {
            id: 'vitaminB7',
            name: 'Vitamin B7 (Biotin)',
            description: 'Plays a role in fatty acid synthesis, amino acid metabolism, and gluconeogenesis (glucose production). Best known for its support of healthy hair, skin, and nails, but also contributes to nervous system function.',
            formula: 'C10H16N2O3S',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Biotin+Structure',
            effects: ['Metabolic Health', 'Hair/Skin/Nail Health', 'Nervous System Support'],
            category: 'Vitamin',
            mechanisms: 'Cofactor for carboxylase enzymes involved in major metabolic pathways (fat, protein, carb metabolism).',
            considerations: 'Water-soluble. Generally very safe, even at high doses. Can interfere with certain lab tests (e.g., thyroid hormones, troponin), leading to falsely high or low results.'
        },
        {
            id: 'vitaminB9',
            name: 'Vitamin B9 (Folate / Folic Acid)',
            description: 'Essential for DNA synthesis and repair, cell growth, and red blood cell formation. Crucial for neural tube development during pregnancy. Works with B12 to reduce homocysteine, supporting cardiovascular and brain health. L-Methylfolate is its active form.',
            formula: 'C19H19N7O6 (Folic Acid)',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Folic+Acid+Structure',
            effects: ['DNA Synthesis', 'Cell Growth', 'Brain Health', 'Mood Regulation (indirect)', 'Homocysteine Reduction'],
            category: 'Vitamin',
            mechanisms: 'Coenzyme in one-carbon metabolism, crucial for nucleotide synthesis (DNA/RNA) and methylation reactions (important for neurotransmitter synthesis).',
            considerations: 'Folic acid (synthetic) needs conversion to active L-Methylfolate. Some individuals have MTHFR gene variations affecting this conversion. High doses of folic acid can mask B12 deficiency. Best to use folate or L-Methylfolate.'
        },
        {
            id: 'vitaminB12',
            name: 'Vitamin B12 (Cobalamin)',
            description: 'Vital for nerve tissue health, brain function, and red blood cell production. Essential for DNA synthesis and works with folate to reduce homocysteine levels. Deficiency can lead to severe neurological and cognitive issues.',
            formula: 'C63H88CoN14O14P',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Cobalamin+Structure',
            effects: ['Nerve Health', 'Brain Function', 'Energy Production', 'DNA Synthesis', 'Homocysteine Reduction'],
            category: 'Vitamin',
            mechanisms: 'Coenzyme in two key metabolic pathways: methylmalonyl-CoA mutase (energy) and methionine synthase (folate metabolism, homocysteine recycling, S-adenosylmethionine for methylation).',
            considerations: 'Water-soluble. Generally safe even at high doses. Oral absorption can be poor, especially for older adults or those with digestive issues (e.g., pernicious anemia). Common deficiency in vegetarians/vegans. Injections or sublingual forms may be needed.'
        },
        {
            id: 'iron',
            name: 'Iron',
            description: 'An essential mineral crucial for oxygen transport in the blood (hemoglobin) and for various metabolic processes, including energy production in the brain. Iron deficiency can lead to fatigue, impaired cognitive function, and restless leg syndrome.',
            formula: 'Fe',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Iron+Structure',
            effects: ['Oxygen Transport', 'Energy Production', 'Cognitive Function (prevents deficiency)', 'Red Blood Cell Formation'],
            category: 'Mineral',
            mechanisms: 'Component of hemoglobin (oxygen transport) and various enzymes involved in oxidative phosphorylation and neurotransmitter synthesis.',
            considerations: 'Do not supplement unless diagnosed with deficiency, as iron overload can be toxic. May cause constipation or stomach upset.'
        },
        {
            id: 'selenium',
            name: 'Selenium',
            description: 'A trace mineral with powerful antioxidant properties, important for thyroid function, immune health, and protecting the brain from oxidative damage. It plays a role in cognitive health and may offer neuroprotective benefits. Often deficient in modern diets.',
            formula: 'Se',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Selenium+Structure',
            effects: ['Antioxidant', 'Thyroid Function', 'Immune Support', 'Neuroprotection'],
            category: 'Mineral',
            mechanisms: 'Component of selenoproteins, which have antioxidant and anti-inflammatory roles. Essential for thyroid hormone metabolism.',
            considerations: 'Excessive intake can lead to selenium toxicity (selenosis), characterized by hair loss, nail brittleness, and neurological symptoms.'
        },
        {
            id: 'potassium',
            name: 'Potassium',
            description: 'An essential electrolyte critical for maintaining fluid balance, nerve signals, and muscle contractions. While not a direct nootropic, its role in nerve function and blood pressure regulation indirectly supports overall brain health and electrical signaling.',
            formula: 'K',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Potassium+Structure',
            effects: ['Electrolyte Balance', 'Nerve Function', 'Muscle Contraction', 'Blood Pressure Regulation'],
            category: 'Mineral',
            mechanisms: 'Maintains resting membrane potential in neurons, essential for nerve impulse transmission and muscle contraction.',
            considerations: 'Usually obtained sufficiently through diet. Supplementation should be approached with caution, especially if on certain medications or with kidney issues, due to risk of hyperkalemia.'
        },
        {
            id: 'vitaminC',
            name: 'Vitamin C (Ascorbic Acid)',
            description: 'A powerful antioxidant and essential cofactor for various enzymatic reactions, including the synthesis of neurotransmitters like norepinephrine. Crucial for immune function and collagen production.',
            formula: 'C6H8O6',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Vitamin+C+Structure',
            effects: ['Antioxidant', 'Immune Support', 'Neurotransmitter Production', 'Mood Regulation', 'Collagen Synthesis'],
            category: 'Vitamin',
            mechanisms: 'Potent electron donor, involved in hydroxylation reactions for dopamine beta-hydroxylase and collagen synthesis. Reduces oxidative stress.',
            considerations: 'Generally safe; high doses (over 2g) may cause gastrointestinal upset, diarrhea. Risk of kidney stones in susceptible individuals. Water-soluble, so excess is typically excreted.'
        },
        {
            id: 'vitaminE',
            name: 'Vitamin E (Tocopherols & Tocotrienols)',
            description: 'A group of fat-soluble vitamins with potent antioxidant properties. Primarily protects cell membranes from oxidative damage caused by free radicals. Important for immune function and skin health.',
            formula: 'Complex',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Vitamin+E+Structure',
            effects: ['Antioxidant', 'Cell Protection', 'Immune Function', 'Skin Health', 'Anti-inflammatory'],
            category: 'Vitamin',
            mechanisms: 'Lipid-soluble antioxidant, integrates into cell membranes to prevent lipid peroxidation.',
            considerations: 'Generally safe within recommended daily allowances. High doses can increase bleeding risk, especially for individuals on anticoagulant medications. Store away from light and heat as it degrades easily.'
        },
        {
            id: 'vitaminK',
            name: 'Vitamin K (K1 & K2)',
            description: 'Essential for blood clotting and bone health. Vitamin K2 (menaquinones, e.g., MK-4, MK-7) is gaining recognition for its role in cardiovascular health and its emerging, indirect contributions to brain health.',
            formula: 'Complex',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Vitamin+K+Structure',
            effects: ['Blood Clotting', 'Bone Health', 'Cardiovascular Health', 'Potential Brain Health'],
            category: 'Vitamin',
            mechanisms: 'Cofactor for gamma-carboxylation of proteins (e.g., osteocalcin, matrix Gla protein) involved in calcium regulation and coagulation. K2 may protect brain cells from oxidative stress and inflammation.',
            considerations: 'Strong interaction with blood-thinning medications (e.g., Warfarin); consult a doctor before supplementing. Generally safe from food sources. High doses are rarely toxic but can interfere with certain medications.'
        },
        {
            id: 'vitaminA',
            name: 'Vitamin A (Retinoids & Carotenoids)',
            description: 'A fat-soluble vitamin crucial for vision, immune function, cell growth, and differentiation. Important for healthy skin and mucous membranes. Plays a role in neurodevelopment and maintaining cognitive function.',
            formula: 'Complex',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Vitamin+A+Structure',
            effects: ['Vision', 'Immune Function', 'Cell Growth', 'Brain Development', 'Skin Health'],
            category: 'Vitamin',
            mechanisms: 'Active forms (retinoids) bind to nuclear receptors, influencing gene expression critical for neural development, synaptic plasticity, and antioxidant defense.',
            considerations: 'Excessive intake of preformed Vitamin A (retinoids) can be toxic (hypervitaminosis A), leading to liver damage, bone issues, and birth defects. Carotenoids (e.g., beta-carotene) are generally safe. Avoid high-dose supplementation without medical supervision.'
        },
        {
            id: 'melatonin',
            name: 'Melatonin',
            description: 'A hormone primarily produced by the pineal gland, crucial for regulating the sleep-wake cycle (circadian rhythm). While not a nootropic in the traditional sense, optimizing sleep is fundamental for cognitive function.',
            formula: 'C13H16N2O2',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Melatonin+Structure',
            effects: ['Sleep Regulation', 'Antioxidant', 'Circadian Rhythm Sync'],
            category: 'Hormone (Endogenous)',
            mechanisms: 'Binds to melatonin receptors in the brain (MT1, MT2), signaling darkness and promoting sleep onset. Also acts as a powerful antioxidant.',
            considerations: 'Can cause drowsiness, dizziness, nausea. May interact with blood thinners, immunosuppressants, and diabetes medications. Use cautiously; effects on endogenous production with long-term use are debated. Always consult a doctor.'
        },
        {
            id: 'testosterone',
            name: 'Testosterone (Endogenous)',
            description: 'The primary male sex hormone, also present in females. Essential for reproductive development, muscle growth, bone density, and influences mood, energy, and cognitive functions like spatial memory and attention.',
            formula: 'C19H28O2',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Testosterone+Structure',
            effects: ['Muscle Mass', 'Bone Density', 'Mood', 'Energy', 'Cognitive Function (spatial memory)'],
            category: 'Hormone (Endogenous)',
            mechanisms: 'Androgen receptor activation, influencing gene expression in various tissues. Indirectly modulated by stress and sleep.',
            considerations: 'Direct supplementation (e.g., TRT) should ONLY be done under strict medical supervision and for diagnosed deficiency. Supplements like Tongkat Ali may indirectly support healthy levels by modulating other pathways. Side effects of direct therapy are significant.'
        },
        {
            id: 'estrogen',
            name: 'Estrogen (Endogenous)',
            description: 'The primary female sex hormone, also present in males. Crucial for reproductive health, bone density, and influences mood, cognition, and cardiovascular health. Plays a role in memory and neuroprotection in females.',
            formula: 'C18H24O2 (Estradiol)',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Estrogen+Structure',
            effects: ['Reproductive Health', 'Bone Density', 'Mood', 'Cognition (memory)', 'Cardiovascular Health'],
            category: 'Hormone (Endogenous)',
            mechanisms: 'Estrogen receptor activation, influencing gene expression. Important for synaptic plasticity and neuroprotection.',
            considerations: 'Direct supplementation (e.g., HRT) should ONLY be done under strict medical supervision. Supplements like DIM may indirectly support healthy estrogen metabolism. Imbalances can have significant health impacts.'
        },
        {
            id: 'cortisol',
            name: 'Cortisol (Endogenous)',
            description: 'A primary stress hormone produced by the adrenal glands. Essential for regulating metabolism, immune response, and helping the body respond to stress. Chronic high levels can negatively impact cognitive function and overall health.',
            formula: 'C21H30O5',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Cortisol+Structure',
            effects: ['Stress Response', 'Metabolism Regulation', 'Inflammation Control'],
            category: 'Hormone (Endogenous)',
            mechanisms: 'Binds to glucocorticoid receptors, influencing gene expression. Part of the HPA axis regulating stress.',
            considerations: 'Elevated chronic cortisol can impair memory, sleep, and immune function. Adaptogens like Ashwagandha and Rhodiola Rosea aim to modulate the body\'s stress response, indirectly supporting healthy cortisol levels. Direct manipulation is complex and risky.'
        },
        {
            id: 'dhea',
            name: 'DHEA (Dehydroepiandrosterone)',
            description: 'A steroid hormone produced by the adrenal glands, serving as a precursor to other hormones like testosterone and estrogen. Levels naturally decline with age. May influence mood, energy, and libido.',
            formula: 'C19H28O2',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=DHEA+Structure',
            effects: ['Hormone Precursor', 'Mood', 'Energy', 'Libido', 'Bone Density (indirect)'],
            category: 'Hormone (Endogenous)',
            mechanisms: 'Converted into androgens and estrogens. Also acts as a neurosteroid, directly influencing brain receptors.',
            considerations: 'Often marketed as an anti-aging supplement, but evidence is mixed. Direct supplementation should only be considered under medical guidance and with regular monitoring due to potential for hormonal imbalances and side effects (e.g., acne, hair loss, mood changes).'
        },
        {
            id: 'dopamineNT',
            name: 'Dopamine (Endogenous Neurotransmitter)',
            description: 'A crucial neurotransmitter and hormone in the brain, essential for reward, motivation, pleasure, motor control, and executive functions like attention and decision-making.',
            formula: 'C8H11NO2',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Dopamine+Structure',
            effects: ['Motivation', 'Reward', 'Pleasure', 'Focus', 'Motor Control'],
            category: 'Neurotransmitter (Endogenous)',
            mechanisms: 'Activates dopamine receptors (D1-D5), influencing neuronal signaling pathways related to reward circuitry and executive control. Precursors include L-Tyrosine (NALT).',
            considerations: 'Direct oral supplementation is ineffective as it does not cross the blood-brain barrier. Many nootropics (e.g., stimulants, NALT) aim to modulate its synthesis, release, or receptor sensitivity. Imbalances are linked to various neurological and psychological conditions.'
        },
        {
            id: 'serotoninNT',
            name: 'Serotonin (Endogenous Neurotransmitter)',
            description: 'A key neurotransmitter that influences mood, well-being, happiness, sleep, digestion, and appetite. Plays a significant role in emotional regulation and stress response.',
            formula: 'C10H12N2O',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Serotonin+Structure',
            effects: ['Mood Regulation', 'Well-being', 'Sleep Quality', 'Appetite Control', 'Emotional Stability'],
            category: 'Neurotransmitter (Endogenous)',
            mechanisms: 'Activates various serotonin receptors (5-HT receptors), influencing neuronal activity in widespread brain regions. Precursor is L-Tryptophan (or 5-HTP).',
            considerations: 'Direct oral supplementation is ineffective as it does not cross the blood-brain barrier. Supplements like 5-HTP (a precursor) can increase brain serotonin. Interactions with antidepressants (SSRIs) can be serious (serotonin syndrome).'
        },
        {
            id: 'gabaNT',
            name: 'GABA (Gamma-Aminobutyric Acid - Endogenous Neurotransmitter)',
            description: 'The primary inhibitory neurotransmitter in the central nervous system. It reduces neuronal excitability throughout the nervous system, promoting calmness, relaxation, and reducing anxiety and stress.',
            formula: 'C4H9NO2',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=GABA+Structure',
            effects: ['Calmness', 'Relaxation', 'Anxiety Reduction', 'Stress Relief', 'Sleep Support'],
            category: 'Neurotransmitter (Endogenous)',
            mechanisms: 'Binds to GABA receptors (GABA-A, GABA-B), increasing chloride ion influx into neurons, leading to hyperpolarization and reduced excitability.',
            considerations: 'Oral GABA generally does not effectively cross the blood-brain barrier. Some supplements (e.g., L-Theanine, certain adaptogens) can modulate GABAergic activity or enhance GABA production. Often targeted by anxiolytic medications.'
        },
        {
            id: 'glutamateNT',
            name: 'Glutamate (Endogenous Neurotransmitter)',
            description: 'The primary excitatory neurotransmitter in the central nervous system. Crucial for learning, memory, synaptic plasticity, and long-term potentiation (LTP), the cellular basis of learning.',
            formula: 'C5H9NO4',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Glutamate+Structure',
            effects: ['Learning', 'Memory Formation', 'Synaptic Plasticity', 'Cognitive Processing'],
            category: 'Neurotransmitter (Endogenous)',
            mechanisms: 'Activates various glutamate receptors (AMPA, NMDA, Kainate), leading to neuronal depolarization and excitatory signaling. Imbalances can lead to excitotoxicity or cognitive impairment.',
            considerations: 'Too much glutamate can be neurotoxic ("excitotoxicity"). Nootropics like racetams often modulate glutamate receptors. Direct oral supplementation is not practical for brain effects; it\'s primarily a dietary amino acid.'
        },
        {
            id: 'acetylcholineNT',
            name: 'Acetylcholine (Endogenous Neurotransmitter)',
            description: 'A vital neurotransmitter involved in memory, learning, attention, and muscle contraction. It is the primary neurotransmitter of the parasympathetic nervous system and a key player in cognitive processes.',
            formula: 'C7H16NO2+',
            formulaImageUrl: 'https://placehold.co/200x80/2A2A2A/FF8C00?text=Acetylcholine+Structure',
            effects: ['Memory', 'Learning', 'Attention', 'Muscle Control', 'Cognitive Processing'],
            category: 'Neurotransmitter (Endogenous)',
            mechanisms: 'Activates nicotinic and muscarinic acetylcholine receptors, influencing diverse brain functions. Synthesized from choline (Alpha-GPC, Citicoline are precursors).',
            considerations: 'Crucial for memory function; decline is implicated in Alzheimer\'s disease. Supplements often focus on providing precursors (choline donors) or inhibiting its breakdown (acetylcholinesterase inhibitors). Direct oral supplementation is ineffective.'
        }
    ];

    const recommendations = {
        energyEndurance: {
            goal: 'More Energy and Physical Endurance',
            stack: [
                { id: 'caffeine', dosage: '200mg' },
                { id: 'lTheanine', dosage: '400mg' },
                { id: 'creatine', dosage: '5g' },
                { id: 'nalt', dosage: '500mg-1g' },
                { id: 'rhodiolaRosea', dosage: '200-400mg' }
            ],
            blueprint: `
                <p class="font-semibold text-lg mb-2 text-orange-400">Blueprint for Energy & Endurance:</p>
                <ul class="list-disc list-inside text-gray-300 space-y-2">
                    <li><strong class="font-medium">Morning (Pre-Workout/Early Day):</strong> Caffeine (200mg) + L-Theanine (400mg). This 1:2 ratio creates focused energy without jitters.</li>
                    <li><strong class="font-medium">Pre-Workout (30-60 mins before):</strong> Creatine (5g), N-Acetyl L-Tyrosine (500mg-1g), Rhodiola Rosea (200-400mg). This combination fuels your muscles and mind, enhancing resilience under physical stress.</li>
                    <li><strong class="font-medium">Foundational Habits:</b> Prioritize 7-9 hours of consistent, quality sleep. Hydrate generously throughout the day. Maintain a balanced diet rich in complex carbohydrates and lean proteins to sustain energy levels.</li>
                </ul>
                <p class="mt-4 text-sm text-gray-400 italic">
                    <strong class="text-orange-400">Analogy:</strong> This stack is like upgrading your internal engine (Creatine for ATP), optimizing fuel delivery (NALT for neurotransmitters), and installing a high-performance cooling system (L-Theanine, Rhodiola for stress) to maximize output and recovery.
                </p>
            `
        },
        cognitiveMemory: {
            goal: 'Cognitive Boost and Memory Enhancement',
            stack: [
                { id: 'bacopaMonnieri', dosage: '300-600mg' },
                { id: 'citicoline', dosage: '250-500mg' },
                { id: 'omega3', dosage: '1g EPA+DHA' },
                { id: 'lionsMane', dosage: '1g-3g' }
            ],
            blueprint: `
                <p class="font-semibold text-lg mb-2 text-orange-400">Blueprint for Cognitive & Memory Enhancement:</p>
                <ul class="list-disc list-inside text-gray-300 space-y-2">
                    <li><strong class="font-medium">Daily Consistency:</strong> Take Bacopa Monnieri (300-600mg), Citicoline (250-500mg), Omega-3s (e.g., 1g EPA+DHA), and Lion's Mane Mushroom (1g-3g). The effects of Bacopa and Lion's Mane build over several weeks of consistent use.</li>
                    <li><strong class="font-medium">Foundational Habits:</strong> Engage in continuous learning (e.g., a new language, musical instrument, or skill). Practice mindfulness or meditation to reduce mental clutter. Ensure adequate, high-quality sleep nightly, as sleep is crucial for memory consolidation and cognitive repair.</li>
                </ul>
                <p class="mt-4 text-sm text-gray-400 italic">
                    <strong class="text-orange-400">Analogy:</strong> This stack is like upgrading your brain's operating system (Citicoline for Acetylcholine), installing robust memory storage (Bacopa), ensuring premium hardware (Omega-3s), and enabling continuous software updates (Lion's Mane for neurogenesis).
                </p>
            `
        },
        hormonalUpregulation: {
            goal: 'Hormonal Balance & Vitality Support',
            stack: [
                { id: 'ashwagandha', dosage: '300-600mg (evening)' },
                { id: 'rhodiolaRosea', dosage: '200-400mg (morning)' },
                { id: 'omega3', dosage: '1g EPA+DHA' },
                { id: 'magnesiumLThreonate', dosage: '145mg elemental Magnesium (evening)' },
                { id: 'vitaminD3', dosage: '2000-5000 IU' },
                { id: 'zinc', dosage: '15-30mg' },
                { id: 'tongkatAli', dosage: '200-400mg' },
                { id: 'dim', dosage: '100-200mg' }
            ],
            blueprint: `
                <p class="font-semibold text-lg mb-2 text-orange-400">Blueprint for Hormonal Balance & Vitality Support:</p>
                <ul class="list-disc list-inside text-gray-300 space-y-2">
                    <li><strong class="font-medium">Daily Core:</strong> Ashwagandha (300-600mg in the evening for stress/sleep), Rhodiola Rosea (200-400mg in the morning for adaptogenic benefits), Omega-3s (e.g., 1g EPA+DHA), and Magnesium L-Threonate (145mg elemental Magnesium in the evening for brain support and relaxation).</li>
                    <li><strong class="font-medium">Foundational Micronutrients:</strong> Ensure adequate Vitamin D3 (2000-5000 IU, especially if sun exposure is limited) and Zinc (15-30mg). These are crucial cofactors for numerous hormonal pathways.</li>
                    <li><strong class="font-medium">Targeted Herbal Support:</strong> Tongkat Ali (200-400mg) for general vitality and stress response, and DIM (100-200mg) to support healthy estrogen metabolism.</li>
                    <li><strong class="font-medium">Foundational Habits:</strong> Prioritize stress reduction techniques like meditation, deep breathing exercises, or spending time in nature. Optimize sleep quality, as hormonal balance is heavily influenced by sleep. Maintain a healthy weight and a balanced, nutrient-dense diet rich in fruits, vegetables, lean proteins, and healthy fats. Regular, moderate exercise is crucial for systemic hormonal equilibrium. Avoid excessive alcohol and processed foods.</li>
                    <li><strong class="font-bold text-red-400">Crucial Warning:</strong> This stack *supports* the body's natural stress response, nutrient status, and overall well-being, which *indirectly* influences hormonal balance. It is NOT a direct hormonal manipulation or replacement therapy. For any specific hormonal concerns, symptoms, or diagnosed imbalances, you MUST consult with a qualified healthcare professional or endocrinologist. Self-treating hormonal conditions can be dangerous.</li>
                </ul>
                <p class="mt-4 text-sm text-gray-400 italic">
                    <strong class="text-orange-400">Analogy:</strong> This stack is like providing a state-of-the-art climate control system (Ashwagandha, Rhodiola for stress), premium construction materials (Omega-3s, Vitamin D3, Zinc), and specialized waste management (DIM for estrogen) for your body's intricate hormonal "ecosystem." It creates an optimal internal environment, allowing your body's natural regulatory systems to thrive and maintain balance.
                </p>
            `
        }
    };

    const handleGoalSelect = (goalId) => {
        setSelectedGoal(goalId);
        setView('recommendation');
    };

    const GoalSelection = () => (
        <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-900 to-black min-h-screen text-gray-100">
            <h1 className="text-4xl font-extrabold text-orange-400 mb-8 text-center leading-tight">
                Your Nootropic Navigator
            </h1>
            <p className="text-xl text-gray-300 mb-10 text-center max-w-2xl">
                Embark on your journey to cognitive optimization. What's your primary goal today?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
                <GoalCard
                    title="Boost Energy & Endurance"
                    description="Ignite your physical stamina and mental drive for peak performance."
                    icon="⚡"
                    onClick={() => handleGoalSelect('energyEndurance')}
                />
                <GoalCard
                    title="Enhance Cognition & Memory"
                    description="Sharpen your focus, accelerate learning, and strengthen recall."
                    icon="🧠"
                    onClick={() => handleGoalSelect('cognitiveMemory')}
                />
                <GoalCard
                    title="Support Hormonal Balance & Vitality"
                    description="Optimize your body's natural equilibrium through comprehensive well-being support."
                    icon="⚖️"
                    onClick={() => handleGoalSelect('hormonalUpregulation')}
                />
            </div>
            <button
                onClick={() => setView('library')}
                className="mt-12 px-8 py-3 bg-orange-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105"
            >
                Explore the Nootropic Library
            </button>
        </div>
    );

    const GoalCard = ({ title, description, icon, onClick }) => (
        <div
            className="bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col items-center text-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl border-b-4 border-orange-700 hover:border-orange-500"
            onClick={onClick}
        >
            <div className="text-5xl mb-4">{icon}</div>
            <h2 className="text-2xl font-bold text-orange-400 mb-3">{title}</h2>
            <p className="text-gray-300 text-base">{description}</p>
        </div>
    );

    const RecommendationDisplay = () => {
        const recommendation = recommendations[selectedGoal];
        if (!recommendation) {
            return (
                <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-gray-900 to-black text-gray-100">
                    <p className="text-2xl text-red-400 mb-4">No recommendation found. Please select a goal.</p>
                    <button
                        onClick={() => setView('goalSelection')}
                        className="mt-6 px-6 py-2 bg-orange-600 text-white font-semibold rounded-full shadow-md hover:bg-orange-700 transition duration-300"
                    >
                        Go Back to Goal Selection
                    </button>
                </div>
            );
        }

        return (
            <div className="flex flex-col items-center p-8 bg-gradient-to-br from-gray-900 to-black min-h-screen text-gray-100">
                <h1 className="text-4xl font-extrabold text-orange-400 mb-6 text-center leading-tight">
                    Your Personalized Blueprint for <br />"{recommendation.goal}"
                </h1>
                <div className="bg-gray-800 rounded-2xl shadow-xl p-8 max-w-4xl w-full border-b-4 border-orange-700">
                    <h2 className="text-3xl font-bold text-orange-400 mb-6 border-b pb-4 border-orange-800">
                        Recommended Stack
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {recommendation.stack.map(item => {
                            const nootropic = nootropicsData.find(n => n.id === item.id);
                            return nootropic ? (
                                <div key={nootropic.id} className="bg-gray-900 p-5 rounded-xl shadow-md border-l-4 border-orange-600">
                                    <h3 className="text-xl font-bold text-orange-300 mb-1">{nootropic.name}</h3>
                                    <p className="text-lg text-gray-300">
                                        <span className="font-semibold">Dosage:</span> {item.dosage}
                                    </p>
                                    <p className="text-sm text-gray-400 mt-2">{nootropic.description.split('. ')[0]}.</p>
                                    <button
                                        onClick={() => {
                                            setSelectedNootropicForModal(nootropic);
                                            setShowModal(true);
                                        }}
                                        className="text-orange-500 text-sm hover:underline mt-2 inline-block"
                                    >
                                        View Details &raquo;
                                    </button>
                                </div>
                            ) : null;
                        })}
                    </div>
                    <h2 className="text-3xl font-bold text-orange-400 mb-6 border-b pb-4 border-orange-800">
                        Usage Blueprint
                    </h2>
                    <div className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: recommendation.blueprint }}></div>
                </div>
                <div className="flex mt-10 space-x-4">
                    <button
                        onClick={() => setView('goalSelection')}
                        className="px-8 py-3 bg-orange-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105"
                    >
                        Choose Another Goal
                    </button>
                    <button
                        onClick={() => setView('library')}
                        className="px-8 py-3 bg-red-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
                    >
                        Explore the Nootropic Library
                    </button>
                </div>
            </div>
        );
    };

    const SupplementLibrary = () => {
        // Group nootropics by category
        const categorizedNootropics = nootropicsData.reduce((acc, nootropic) => {
            const category = nootropic.category;
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(nootropic);
            return acc;
        }, {});

        return (
            <div className="flex flex-col items-center p-8 bg-gradient-to-br from-gray-900 to-black min-h-screen text-gray-100">
                <h1 className="text-4xl font-extrabold text-orange-400 mb-8 text-center leading-tight">
                    The Nootropic Library: Your Arsenal of Cognitive Tools
                </h1>
                <p className="text-xl text-gray-300 mb-10 text-center max-w-3xl">
                    Dive deep into the individual components. Each card offers a glimpse into how these amazing substances work.
                </p>
                
                {Object.keys(categorizedNootropics).map(category => (
                    <div key={category} className="w-full max-w-6xl mb-12">
                        <h2 className="text-3xl font-bold text-orange-300 mb-6 border-b pb-2 border-orange-800">{category}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {categorizedNootropics[category].map(nootropic => (
                                <SupplementCard
                                    key={nootropic.id} // Use nootropic.id as the key
                                    nootropic={nootropic}
                                    onClick={() => {
                                        setSelectedNootropicForModal(nootropic);
                                        setShowModal(true);
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                ))}

                <button
                    onClick={() => selectedGoal ? setView('recommendation') : setView('goalSelection')}
                    className="mt-12 px-8 py-3 bg-orange-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105"
                >
                    {selectedGoal ? 'Back to Your Recommendation' : 'Back to Goal Selection'}
                </button>
                {showModal && selectedNootropicForModal && (
                    <NootropicModal
                        nootropic={selectedNootropicForModal}
                        onClose={() => setShowModal(false)}
                    />
                )}
            </div>
        );
    };

    const SupplementCard = ({ nootropic, onClick }) => (
        <div
            className="bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col border-b-4 border-orange-700 hover:border-orange-500 transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer text-gray-200"
            onClick={onClick}
        >
            <h3 className="text-2xl font-bold text-orange-300 mb-3 text-center">{nootropic.name}</h3>
            <p className="text-sm font-semibold text-orange-400 mb-4 text-center">{nootropic.category}</p>
            
            {nootropic.formulaImageUrl && (
                <div className="flex justify-center items-center my-4 h-20 w-full">
                    <img
                        src={nootropic.formulaImageUrl}
                        alt={`Chemical structure for ${nootropic.name}`}
                        className="max-w-full max-h-full object-contain rounded-md shadow-inner bg-gray-900" // Darker background for image
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x80/333333/AAAAAA?text=Image+Error'; }} // Darker error image
                    />
                </div>
            )}

            <p className="text-gray-300 text-base mb-4 flex-grow text-center">{nootropic.description.split('. ')[0]}.</p>
            
            <div className="bg-gray-900 rounded-lg p-3 mt-auto">
                <p className="text-gray-200 font-semibold mb-1">Primary Effects:</p>
                <ul className="list-disc list-inside text-gray-300 text-sm">
                    {nootropic.effects.map((effect, index) => (
                        <li key={index}>{effect}</li>
                    ))}
                </ul>
            </div>
        </div>
    );

    const NootropicModal = ({ nootropic, onClose }) => {
        if (!nootropic) return null; // Ensure nootropic data is available

        return (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50 overflow-auto">
                <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-3xl w-full relative transform scale-95 md:scale-100 transition-transform duration-300 ease-out text-gray-100">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-100 text-3xl font-bold"
                    >
                        &times;
                    </button>
                    <h2 className="text-4xl font-extrabold text-orange-300 mb-4 text-center leading-tight">{nootropic.name}</h2>
                    <p className="text-lg font-semibold text-orange-400 mb-6 text-center">{nootropic.category}</p>

                    {nootropic.formulaImageUrl && (
                        <div className="flex justify-center items-center my-6 h-32 w-full">
                            <img
                                src={nootropic.formulaImageUrl}
                                alt={`Chemical structure for ${nootropic.name}`}
                                className="max-w-full max-h-full object-contain rounded-md shadow-inner bg-gray-900 border border-gray-700"
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x120/333333/AAAAAA?text=Image+Error'; }}
                            />
                        </div>
                    )}
                    
                    <h3 className="text-2xl font-bold text-orange-300 mb-3 border-b pb-2 border-orange-800">Overview</h3>
                    <p className="text-gray-300 text-base mb-6 leading-relaxed">{nootropic.description}</p>
                    
                    {nootropic.mechanisms && (
                        <>
                            <h3 className="text-2xl font-bold text-orange-300 mb-3 border-b pb-2 border-orange-800">Potential Mechanisms</h3>
                            <p className="text-gray-300 text-base mb-6 leading-relaxed">{nootropic.mechanisms}</p>
                        </>
                    )}

                    <div className="bg-gray-900 rounded-xl p-4 mb-4">
                        <p className="text-gray-200 font-semibold mb-2">Chemical Formula:</p>
                        <code className="block text-orange-400 font-mono text-base break-words">{nootropic.formula}</code>
                    </div>

                    <div className="bg-gray-900 rounded-xl p-4 mb-4">
                        <p className="text-gray-200 font-semibold mb-2">Primary Effects:</p>
                        <ul className="list-disc list-inside text-gray-300 text-base space-y-1">
                            {nootropic.effects.map((effect, index) => (
                                <li key={index}>{effect}</li>
                            ))}
                        </ul>
                    </div>

                    {nootropic.considerations && (
                        <div className="bg-red-900 rounded-xl p-4 border border-red-700">
                            <p className="text-red-300 font-semibold mb-2">Important Considerations:</p>
                            <p className="text-red-200 text-base leading-relaxed">{nootropic.considerations}</p>
                        </div>
                    )}

                    <button
                        onClick={onClose}
                        className="mt-8 w-full px-6 py-3 bg-orange-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-orange-700 transition duration-300 transform hover:scale-105"
                    >
                        Close
                    </button>
                </div>
            </div>
        );
    };

    // Binaural Beats Component
    const BinauralBeats = () => {
        const [isPlaying, setIsPlaying] = useState(false);
        const [currentFrequency, setCurrentFrequency] = useState(10);
        const [volume, setVolume] = useState(0.5);
        const [audioContext, setAudioContext] = useState(null);
        const [oscillators, setOscillators] = useState({ left: null, right: null });

        const frequencyPresets = [
            { name: 'Deep Sleep', frequency: 0.5, description: 'Delta waves for deep restorative sleep' },
            { name: 'Light Sleep', frequency: 4, description: 'Theta waves for light sleep and meditation' },
            { name: 'Relaxation', frequency: 8, description: 'Alpha waves for relaxation and stress relief' },
            { name: 'Focus', frequency: 10, description: 'Alpha waves for enhanced focus and concentration' },
            { name: 'Creativity', frequency: 12, description: 'Alpha waves for creative thinking' },
            { name: 'Alertness', frequency: 16, description: 'Beta waves for alertness and active thinking' },
            { name: 'High Focus', frequency: 20, description: 'Beta waves for high concentration tasks' },
            { name: 'Problem Solving', frequency: 25, description: 'Beta waves for analytical thinking' },
            { name: 'Insight', frequency: 40, description: 'Gamma waves for insight and peak performance' }
        ];

        const startBinauralBeats = () => {
            if (!audioContext) {
                const newAudioContext = new (window.AudioContext || window.webkitAudioContext)();
                setAudioContext(newAudioContext);
                
                const leftOsc = newAudioContext.createOscillator();
                const rightOsc = newAudioContext.createOscillator();
                const leftGain = newAudioContext.createGain();
                const rightGain = newAudioContext.createGain();
                const merger = newAudioContext.createChannelMerger(2);

                // Set up left channel (base frequency)
                leftOsc.frequency.setValueAtTime(200, newAudioContext.currentTime);
                leftOsc.connect(leftGain);
                leftGain.connect(merger, 0, 0);
                leftGain.gain.setValueAtTime(volume, newAudioContext.currentTime);

                // Set up right channel (base frequency + binaural frequency)
                rightOsc.frequency.setValueAtTime(200 + currentFrequency, newAudioContext.currentTime);
                rightOsc.connect(rightGain);
                rightGain.connect(merger, 0, 1);
                rightGain.gain.setValueAtTime(volume, newAudioContext.currentTime);

                // Start oscillators
                leftOsc.start();
                rightOsc.start();

                setOscillators({ left: leftOsc, right: rightOsc });
                setIsPlaying(true);
            } else {
                // Resume existing context
                audioContext.resume();
                setIsPlaying(true);
            }
        };

        const stopBinauralBeats = () => {
            if (audioContext) {
                audioContext.suspend();
                setIsPlaying(false);
            }
            if (oscillators.left && oscillators.right) {
                oscillators.left.stop();
                oscillators.right.stop();
                setOscillators({ left: null, right: null });
            }
        };

        const updateFrequency = (freq) => {
            setCurrentFrequency(freq);
            if (isPlaying && oscillators.left && oscillators.right) {
                oscillators.left.frequency.setValueAtTime(200, audioContext.currentTime);
                oscillators.right.frequency.setValueAtTime(200 + freq, audioContext.currentTime);
            }
        };

        const updateVolume = (vol) => {
            setVolume(vol);
            if (isPlaying && oscillators.left && oscillators.right) {
                // Note: We'd need to store gain nodes to update volume dynamically
                // For simplicity, we'll restart with new volume
                stopBinauralBeats();
                setTimeout(() => startBinauralBeats(), 100);
            }
        };

        return (
            <div className="flex flex-col items-center p-8 bg-gradient-to-br from-gray-900 to-black min-h-screen text-gray-100">
                <h1 className="text-4xl font-extrabold text-orange-400 mb-8 text-center leading-tight">
                    Binaural Beats Generator
                </h1>
                <p className="text-xl text-gray-300 mb-10 text-center max-w-3xl">
                    Harness the power of brainwave entrainment to optimize your mental state for different activities.
                </p>

                <div className="bg-gray-800 rounded-2xl shadow-xl p-8 max-w-4xl w-full border-b-4 border-orange-700">
                    {/* Frequency Presets */}
                    <h2 className="text-3xl font-bold text-orange-400 mb-6 border-b pb-4 border-orange-800">
                        Frequency Presets
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                        {frequencyPresets.map((preset, index) => (
                            <div
                                key={index}
                                className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                                    currentFrequency === preset.frequency
                                        ? 'bg-orange-600 text-white'
                                        : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                                }`}
                                onClick={() => updateFrequency(preset.frequency)}
                            >
                                <h3 className="font-bold text-lg mb-1">{preset.name}</h3>
                                <p className="text-sm opacity-80">{preset.frequency} Hz</p>
                                <p className="text-xs mt-2 opacity-70">{preset.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Custom Frequency Control */}
                    <h2 className="text-3xl font-bold text-orange-400 mb-6 border-b pb-4 border-orange-800">
                        Custom Controls
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <label className="block text-gray-200 font-semibold mb-2">
                                Frequency: {currentFrequency} Hz
                            </label>
                            <input
                                type="range"
                                min="0.5"
                                max="40"
                                step="0.5"
                                value={currentFrequency}
                                onChange={(e) => updateFrequency(parseFloat(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                            />
                            <div className="flex justify-between text-xs text-gray-400 mt-1">
                                <span>0.5 Hz</span>
                                <span>40 Hz</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-200 font-semibold mb-2">
                                Volume: {Math.round(volume * 100)}%
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.1"
                                value={volume}
                                onChange={(e) => updateVolume(parseFloat(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                            />
                            <div className="flex justify-between text-xs text-gray-400 mt-1">
                                <span>0%</span>
                                <span>100%</span>
                            </div>
                        </div>
                    </div>

                    {/* Playback Controls */}
                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={isPlaying ? stopBinauralBeats : startBinauralBeats}
                            className={`px-8 py-4 text-xl font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 ${
                                isPlaying
                                    ? 'bg-red-600 hover:bg-red-700 text-white'
                                    : 'bg-green-600 hover:bg-green-700 text-white'
                            }`}
                        >
                            {isPlaying ? '⏹️ Stop' : '▶️ Start'}
                        </button>
                    </div>

                    {/* Information Panel */}
                    <div className="mt-8 bg-gray-900 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-orange-300 mb-4">How Binaural Beats Work</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Binaural beats occur when two slightly different frequencies are presented to each ear. 
                            Your brain perceives a third frequency equal to the difference between the two, 
                            which can help entrain your brainwaves to specific states.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <h4 className="font-semibold text-orange-400 mb-2">Brainwave States:</h4>
                                <ul className="text-gray-300 space-y-1">
                                    <li><strong>Delta (0.5-4 Hz):</strong> Deep sleep, healing</li>
                                    <li><strong>Theta (4-8 Hz):</strong> Meditation, creativity</li>
                                    <li><strong>Alpha (8-13 Hz):</strong> Relaxation, focus</li>
                                    <li><strong>Beta (13-30 Hz):</strong> Alertness, concentration</li>
                                    <li><strong>Gamma (30-100 Hz):</strong> Insight, peak performance</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-orange-400 mb-2">Usage Tips:</h4>
                                <ul className="text-gray-300 space-y-1">
                                    <li>• Use headphones for best results</li>
                                    <li>• Start with 10-15 minute sessions</li>
                                    <li>• Find a quiet, comfortable environment</li>
                                    <li>• Be patient - effects may take time</li>
                                    <li>• Don't use while driving or operating machinery</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Enhanced Pomodoro Timer with Task Management
    const PomodoroTimer = () => {
        const [timeLeft, setTimeLeft] = useState(25 * 60);
        const [isRunning, setIsRunning] = useState(false);
        const [isBreak, setIsBreak] = useState(false);
        const [sessions, setSessions] = useState(0);
        const [timerMode, setTimerMode] = useState('work');
        const [tasks, setTasks] = useState([]);
        const [newTask, setNewTask] = useState('');
        const [currentTask, setCurrentTask] = useState(null);
        const [showTaskModal, setShowTaskModal] = useState(false);
        const [taskStats, setTaskStats] = useState({
            completed: 0,
            totalPomodoros: 0,
            totalTime: 0
        });

        const timerSettings = {
            work: 25 * 60,
            shortBreak: 5 * 60,
            longBreak: 15 * 60
        };

        // Load tasks from localStorage
        useEffect(() => {
            const savedTasks = localStorage.getItem('pomodoroTasks');
            const savedStats = localStorage.getItem('pomodoroStats');
            if (savedTasks) setTasks(JSON.parse(savedTasks));
            if (savedStats) setTaskStats(JSON.parse(savedStats));
        }, []);

        // Save tasks to localStorage
        useEffect(() => {
            localStorage.setItem('pomodoroTasks', JSON.stringify(tasks));
            localStorage.setItem('pomodoroStats', JSON.stringify(taskStats));
        }, [tasks, taskStats]);

        useEffect(() => {
            let interval = null;
            if (isRunning && timeLeft > 0) {
                interval = setInterval(() => {
                    setTimeLeft(timeLeft - 1);
                }, 1000);
            } else if (timeLeft === 0) {
                setIsRunning(false);
                
                // Play notification sound
                if ('Notification' in window && Notification.permission === 'granted') {
                    new Notification('Pomodoro Timer', {
                        body: isBreak ? 'Break time is over! Time to work!' : 'Work session complete! Take a break!',
                        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ea580c"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'
                    });
                }

                // Update task progress when work session completes
                if (!isBreak && currentTask) {
                    const updatedTasks = tasks.map(task => 
                        task.id === currentTask.id 
                            ? { ...task, completedPomodoros: task.completedPomodoros + 1 }
                            : task
                    );
                    setTasks(updatedTasks);
                    setTaskStats(prev => ({
                        ...prev,
                        totalPomodoros: prev.totalPomodoros + 1,
                        totalTime: prev.totalTime + timerSettings.work
                    }));
                }

                // Auto-switch to next mode
                if (!isBreak) {
                    setSessions(sessions + 1);
                    if (sessions % 4 === 3) {
                        setTimerMode('longBreak');
                        setTimeLeft(timerSettings.longBreak);
                    } else {
                        setTimerMode('shortBreak');
                        setTimeLeft(timerSettings.shortBreak);
                    }
                    setIsBreak(true);
                } else {
                    setTimerMode('work');
                    setTimeLeft(timerSettings.work);
                    setIsBreak(false);
                }
            }
            return () => clearInterval(interval);
        }, [isRunning, timeLeft, isBreak, sessions, timerMode, currentTask, tasks]);

        const addTask = () => {
            if (newTask.trim()) {
                const task = {
                    id: Date.now(),
                    title: newTask.trim(),
                    description: '',
                    priority: 'medium',
                    completedPomodoros: 0,
                    estimatedPomodoros: 1,
                    completed: false,
                    createdAt: new Date().toISOString(),
                    category: 'work'
                };
                setTasks([...tasks, task]);
                setNewTask('');
            }
        };

        const deleteTask = (taskId) => {
            setTasks(tasks.filter(task => task.id !== taskId));
            if (currentTask && currentTask.id === taskId) {
                setCurrentTask(null);
            }
        };

        const completeTask = (taskId) => {
            const updatedTasks = tasks.map(task => 
                task.id === taskId 
                    ? { ...task, completed: true, completedAt: new Date().toISOString() }
                    : task
            );
            setTasks(updatedTasks);
            setTaskStats(prev => ({
                ...prev,
                completed: prev.completed + 1
            }));
        };

        const startTask = (task) => {
            setCurrentTask(task);
            setTimerMode('work');
            setTimeLeft(timerSettings.work);
            setIsBreak(false);
            setIsRunning(false);
        };

        const startTimer = () => {
            setIsRunning(true);
            if ('Notification' in window && Notification.permission === 'default') {
                Notification.requestPermission();
            }
        };

        const pauseTimer = () => {
            setIsRunning(false);
        };

        const resetTimer = () => {
            setIsRunning(false);
            setTimeLeft(timerSettings[timerMode]);
        };

        const switchMode = (mode) => {
            setTimerMode(mode);
            setTimeLeft(timerSettings[mode]);
            setIsRunning(false);
            setIsBreak(mode !== 'work');
        };

        const formatTime = (seconds) => {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        };

        const getProgress = () => {
            const total = timerSettings[timerMode];
            return ((total - timeLeft) / total) * 100;
        };

        const getPriorityColor = (priority) => {
            switch (priority) {
                case 'high': return 'text-red-400';
                case 'medium': return 'text-yellow-400';
                case 'low': return 'text-green-400';
                default: return 'text-gray-400';
            }
        };

        const getPriorityIcon = (priority) => {
            switch (priority) {
                case 'high': return '🔴';
                case 'medium': return '🟡';
                case 'low': return '🟢';
                default: return '⚪';
            }
        };

        const TaskModal = ({ task, onClose, onSave }) => {
            const [editedTask, setEditedTask] = useState(task);

            const handleSave = () => {
                const updatedTasks = tasks.map(t => 
                    t.id === task.id ? editedTask : t
                );
                setTasks(updatedTasks);
                onSave();
            };

            return (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full mx-4">
                        <h3 className="text-xl font-bold text-orange-400 mb-4">Edit Task</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
                                <input
                                    type="text"
                                    value={editedTask.title}
                                    onChange={(e) => setEditedTask({...editedTask, title: e.target.value})}
                                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                                <textarea
                                    value={editedTask.description}
                                    onChange={(e) => setEditedTask({...editedTask, description: e.target.value})}
                                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                                    rows="3"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Priority</label>
                                <select
                                    value={editedTask.priority}
                                    onChange={(e) => setEditedTask({...editedTask, priority: e.target.value})}
                                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                                >
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Estimated Pomodoros</label>
                                <input
                                    type="number"
                                    min="1"
                                    value={editedTask.estimatedPomodoros}
                                    onChange={(e) => setEditedTask({...editedTask, estimatedPomodoros: parseInt(e.target.value) || 1})}
                                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                                />
                            </div>
                        </div>
                        <div className="flex space-x-3 mt-6">
                            <button
                                onClick={handleSave}
                                className="flex-1 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium"
                            >
                                Save
                            </button>
                            <button
                                onClick={onClose}
                                className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            );
        };

        return (
            <div className="flex flex-col items-center p-8 bg-gradient-to-br from-gray-900 to-black min-h-screen text-gray-100">
                <h1 className="text-4xl font-extrabold text-orange-400 mb-8 text-center leading-tight">
                    Pomodoro Timer & Task Manager
                </h1>
                <p className="text-xl text-gray-300 mb-10 text-center max-w-3xl">
                    Master focused work with timed sessions and intelligent task management.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl w-full">
                    {/* Timer Section */}
                    <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border-b-4 border-orange-700">
                        {/* Current Task Display */}
                        {currentTask && (
                            <div className="mb-6 p-4 bg-orange-900 rounded-lg border border-orange-700">
                                <h3 className="text-lg font-semibold text-orange-300 mb-2">Current Task:</h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-orange-200">{currentTask.title}</span>
                                    <button
                                        onClick={() => setCurrentTask(null)}
                                        className="text-orange-400 hover:text-orange-300"
                                    >
                                        ✕
                                    </button>
                                </div>
                                <div className="text-sm text-orange-300 mt-2">
                                    {currentTask.completedPomodoros}/{currentTask.estimatedPomodoros} pomodoros
                                </div>
                            </div>
                        )}

                        {/* Timer Display */}
                        <div className="text-center mb-8">
                            <div className="relative w-48 h-48 mx-auto mb-6">
                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="none"
                                        stroke="#374151"
                                        strokeWidth="6"
                                    />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="40"
                                        fill="none"
                                        stroke="#ea580c"
                                        strokeWidth="6"
                                        strokeDasharray={`${2 * Math.PI * 40}`}
                                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - getProgress() / 100)}`}
                                        strokeLinecap="round"
                                        className="transition-all duration-1000 ease-linear"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-orange-400 mb-2">
                                            {formatTime(timeLeft)}
                                        </div>
                                        <div className="text-sm text-gray-300 capitalize">
                                            {timerMode === 'work' ? 'Work Time' : 
                                             timerMode === 'shortBreak' ? 'Short Break' : 'Long Break'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mode Selection */}
                        <div className="flex justify-center space-x-2 mb-6">
                            <button
                                onClick={() => switchMode('work')}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    timerMode === 'work'
                                        ? 'bg-orange-600 text-white'
                                        : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                                }`}
                            >
                                Work
                            </button>
                            <button
                                onClick={() => switchMode('shortBreak')}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    timerMode === 'shortBreak'
                                        ? 'bg-orange-600 text-white'
                                        : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                                }`}
                            >
                                Short Break
                            </button>
                            <button
                                onClick={() => switchMode('longBreak')}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    timerMode === 'longBreak'
                                        ? 'bg-orange-600 text-white'
                                        : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                                }`}
                            >
                                Long Break
                            </button>
                        </div>

                        {/* Controls */}
                        <div className="flex justify-center space-x-4 mb-6">
                            {!isRunning ? (
                                <button
                                    onClick={startTimer}
                                    className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                                >
                                    ▶️ Start
                                </button>
                            ) : (
                                <button
                                    onClick={pauseTimer}
                                    className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                                >
                                    ⏸️ Pause
                                </button>
                            )}
                            <button
                                onClick={resetTimer}
                                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                            >
                                🔄 Reset
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="bg-gray-900 rounded-xl p-4">
                            <h3 className="text-lg font-bold text-orange-300 mb-3 text-center">Today's Stats</h3>
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div>
                                    <div className="text-xl font-bold text-orange-400">{sessions}</div>
                                    <div className="text-xs text-gray-400">Work Sessions</div>
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-orange-400">
                                        {Math.floor((timerSettings.work * sessions) / 60)}
                                    </div>
                                    <div className="text-xs text-gray-400">Minutes Focused</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Task Management Section */}
                    <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border-b-4 border-blue-700">
                        <h2 className="text-2xl font-bold text-blue-400 mb-6">Task Management</h2>
                        
                        {/* Add Task */}
                        <div className="mb-6">
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    value={newTask}
                                    onChange={(e) => setNewTask(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && addTask()}
                                    placeholder="Add a new task..."
                                    className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                                />
                                <button
                                    onClick={addTask}
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
                                >
                                    Add
                                </button>
                            </div>
                        </div>

                        {/* Task List */}
                        <div className="space-y-3 max-h-96 overflow-y-auto">
                            {tasks.filter(task => !task.completed).map(task => (
                                <div
                                    key={task.id}
                                    className={`p-4 rounded-lg border-l-4 ${
                                        currentTask?.id === task.id 
                                            ? 'bg-blue-900 border-blue-500' 
                                            : 'bg-gray-700 border-gray-600'
                                    }`}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center space-x-2">
                                            <span className={getPriorityColor(task.priority)}>
                                                {getPriorityIcon(task.priority)}
                                            </span>
                                            <h3 className={`font-medium ${task.completed ? 'line-through text-gray-400' : 'text-white'}`}>
                                                {task.title}
                                            </h3>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-sm text-gray-400">
                                                {task.completedPomodoros}/{task.estimatedPomodoros}
                                            </span>
                                            <button
                                                onClick={() => startTask(task)}
                                                className="text-blue-400 hover:text-blue-300 text-sm"
                                            >
                                                ▶️
                                            </button>
                                            <button
                                                onClick={() => setShowTaskModal(task)}
                                                className="text-gray-400 hover:text-gray-300 text-sm"
                                            >
                                                ✏️
                                            </button>
                                            <button
                                                onClick={() => completeTask(task.id)}
                                                className="text-green-400 hover:text-green-300 text-sm"
                                            >
                                                ✓
                                            </button>
                                            <button
                                                onClick={() => deleteTask(task.id)}
                                                className="text-red-400 hover:text-red-300 text-sm"
                                            >
                                                🗑️
                                            </button>
                                        </div>
                                    </div>
                                    {task.description && (
                                        <p className="text-sm text-gray-400 mb-2">{task.description}</p>
                                    )}
                                    <div className="flex items-center justify-between text-xs text-gray-500">
                                        <span>Created: {new Date(task.createdAt).toLocaleDateString()}</span>
                                        <span>Priority: {task.priority}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Completed Tasks */}
                        {tasks.filter(task => task.completed).length > 0 && (
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold text-green-400 mb-3">Completed Tasks</h3>
                                <div className="space-y-2 max-h-32 overflow-y-auto">
                                    {tasks.filter(task => task.completed).map(task => (
                                        <div key={task.id} className="p-3 bg-gray-700 rounded-lg opacity-75">
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-300 line-through">{task.title}</span>
                                                <span className="text-xs text-gray-500">
                                                    {task.completedPomodoros} pomodoros
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Task Stats */}
                        <div className="mt-6 bg-gray-900 rounded-xl p-4">
                            <h3 className="text-lg font-bold text-blue-300 mb-3 text-center">Task Statistics</h3>
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <div className="text-xl font-bold text-blue-400">{taskStats.completed}</div>
                                    <div className="text-xs text-gray-400">Completed</div>
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-blue-400">{taskStats.totalPomodoros}</div>
                                    <div className="text-xs text-gray-400">Total Pomodoros</div>
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-blue-400">
                                        {Math.floor(taskStats.totalTime / 60)}
                                    </div>
                                    <div className="text-xs text-gray-400">Minutes</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tips */}
                <div className="mt-8 bg-blue-900 rounded-xl p-4 border border-blue-700 max-w-4xl w-full">
                    <h4 className="font-semibold text-blue-300 mb-2">💡 Enhanced Pomodoro Tips:</h4>
                    <ul className="text-blue-200 text-sm space-y-1">
                        <li>• Break large tasks into smaller, manageable pomodoros</li>
                        <li>• Use task priority to focus on what matters most</li>
                        <li>• Track your progress to build momentum and motivation</li>
                        <li>• Take breaks to maintain mental clarity and prevent burnout</li>
                        <li>• Review completed tasks to celebrate your progress</li>
                    </ul>
                </div>

                {/* Task Modal */}
                {showTaskModal && (
                    <TaskModal
                        task={showTaskModal}
                        onClose={() => setShowTaskModal(false)}
                        onSave={() => setShowTaskModal(false)}
                    />
                )}
            </div>
        );
    };

    const TrainingHub = () => {
        const [selectedTraining, setSelectedTraining] = useState(null);

        const trainingPrograms = [
            {
                id: 'focus',
                title: 'Focus & Concentration',
                description: 'Improve your ability to maintain attention and concentration',
                duration: '4 weeks',
                exercises: [
                    'Mindful breathing exercises',
                    'Attention span training',
                    'Distraction elimination techniques',
                    'Deep work protocols'
                ],
                icon: '🎯'
            },
            {
                id: 'memory',
                title: 'Memory Enhancement',
                description: 'Boost your memory retention and recall abilities',
                duration: '6 weeks',
                exercises: [
                    'Memory palace technique',
                    'Spaced repetition practice',
                    'Association methods',
                    'Visual memory training'
                ],
                icon: '🧠'
            },
            {
                id: 'creativity',
                title: 'Creative Thinking',
                description: 'Unlock your creative potential and innovative thinking',
                duration: '4 weeks',
                exercises: [
                    'Divergent thinking exercises',
                    'Creative problem solving',
                    'Mind mapping techniques',
                    'Idea generation methods'
                ],
                icon: '✨'
            },
            {
                id: 'productivity',
                title: 'Productivity Mastery',
                description: 'Master time management and productivity systems',
                duration: '8 weeks',
                exercises: [
                    'Time blocking strategies',
                    'Task prioritization methods',
                    'Energy management techniques',
                    'Workflow optimization'
                ],
                icon: '⚡'
            }
        ];

        return (
            <div className="flex flex-col items-center p-8 bg-gradient-to-br from-gray-900 to-black min-h-screen text-gray-100">
                <h1 className="text-4xl font-extrabold text-orange-400 mb-8 text-center leading-tight">
                    Training Hub
                </h1>
                <p className="text-xl text-gray-300 mb-10 text-center max-w-3xl">
                    Comprehensive training programs for cognitive enhancement and productivity.
                </p>

                <div className="bg-gray-800 rounded-2xl shadow-xl p-8 max-w-4xl w-full border-b-4 border-orange-700">
                    {!selectedTraining ? (
                        <div>
                            <h2 className="text-3xl font-bold text-orange-400 mb-6 border-b pb-4 border-orange-800">
                                Choose Your Training Program
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {trainingPrograms.map(program => (
                                    <div
                                        key={program.id}
                                        className="bg-gray-700 rounded-xl p-6 cursor-pointer hover:bg-gray-600 transition-all duration-200 border-l-4 border-orange-600"
                                        onClick={() => setSelectedTraining(program)}
                                    >
                                        <div className="flex items-center mb-4">
                                            <span className="text-3xl mr-3">{program.icon}</span>
                                            <div>
                                                <h3 className="text-xl font-bold text-orange-300">{program.title}</h3>
                                                <p className="text-sm text-orange-400">{program.duration}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 mb-4">{program.description}</p>
                                        <button className="text-orange-400 hover:text-orange-300 font-semibold">
                                            Start Training →
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <button
                                onClick={() => setSelectedTraining(null)}
                                className="mb-6 text-orange-400 hover:text-orange-300 font-semibold flex items-center"
                            >
                                ← Back to Programs
                            </button>
                            <div className="text-center mb-8">
                                <span className="text-4xl mb-4 block">{selectedTraining.icon}</span>
                                <h2 className="text-3xl font-bold text-orange-400 mb-2">{selectedTraining.title}</h2>
                                <p className="text-gray-300 mb-2">{selectedTraining.description}</p>
                                <span className="text-orange-400 font-semibold">{selectedTraining.duration}</span>
                            </div>
                            
                            <div className="bg-gray-900 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-orange-300 mb-4">Training Exercises</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {selectedTraining.exercises.map((exercise, index) => (
                                        <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                                            <div className="flex items-center">
                                                <span className="text-orange-400 font-bold mr-3">{index + 1}</span>
                                                <span className="text-gray-200">{exercise}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                                    🚀 Start {selectedTraining.title} Program
                                </button>
                            </div>

                            <div className="mt-6 bg-green-900 rounded-xl p-4 border border-green-700">
                                <h4 className="font-semibold text-green-300 mb-2">💡 Training Tips:</h4>
                                <ul className="text-green-200 text-sm space-y-1">
                                    <li>• Practice exercises daily for best results</li>
                                    <li>• Track your progress and improvements</li>
                                    <li>• Combine with nootropics for enhanced effects</li>
                                    <li>• Be patient - cognitive improvements take time</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    // Main render with navigation
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
            <style dangerouslySetInnerHTML={{ __html: sliderStyles }} />
            <Navigation />
            <div className="pt-16">
                {view === 'nootropics' && (
                    <div>
                        {selectedGoal ? (
                            selectedGoal === 'library' ? <SupplementLibrary /> : <RecommendationDisplay />
                        ) : (
                            <GoalSelection />
                        )}
                    </div>
                )}
                {view === 'binauralBeats' && <BinauralBeats />}
                {view === 'pomodoro' && <PomodoroTimer />}
                {view === 'training' && <TrainingHub />}
            </div>
            {showModal && selectedNootropicForModal && (
                <NootropicModal
                    nootropic={selectedNootropicForModal}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
};

// Make App available globally for browser use
window.App = App;
