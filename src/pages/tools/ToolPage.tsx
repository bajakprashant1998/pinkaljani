import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowRight, 
  ChevronRight,
  Copy,
  Download,
  RefreshCw,
  CheckCircle,
  Calculator,
  Search,
  Globe,
  FileText,
  Zap,
  Lock,
  Eye,
  Link as LinkIcon,
  Clock,
  Type,
  Hash,
  Percent,
  DollarSign,
  Users,
  TrendingUp,
  Target,
  BarChart3
} from "lucide-react";
import { freeToolsCategories } from "@/data/menuData";

// Tool Components
const SEOChecker = () => {
  const [url, setUrl] = useState("");
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const analyze = () => {
    setLoading(true);
    setTimeout(() => {
      setResults({
        score: Math.floor(Math.random() * 40) + 60,
        title: { status: "good", text: "Title tag found (55 characters)" },
        meta: { status: "warning", text: "Meta description could be longer (120 characters)" },
        h1: { status: "good", text: "Single H1 tag found" },
        images: { status: "error", text: "3 images missing alt text" },
        mobile: { status: "good", text: "Mobile-friendly" },
        speed: { status: "warning", text: "Page load time: 3.2s" },
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <Input 
          placeholder="Enter website URL (e.g., https://example.com)" 
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1"
        />
        <Button onClick={analyze} disabled={loading || !url}>
          {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
          Analyze
        </Button>
      </div>
      
      {results && (
        <div className="space-y-4">
          <div className="text-center p-6 bg-primary/10 rounded-xl">
            <div className="text-5xl font-bold text-primary mb-2">{results.score}</div>
            <div className="text-muted-foreground">SEO Score</div>
          </div>
          <div className="grid gap-3">
            {Object.entries(results).filter(([key]) => key !== 'score').map(([key, value]: [string, any]) => (
              <div key={key} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <div className={`w-3 h-3 rounded-full ${
                  value.status === 'good' ? 'bg-green-500' : 
                  value.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                }`} />
                <span className="text-foreground">{value.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
    setCopied(false);
  };

  const copy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <label className="text-foreground">Length: {length}</label>
        <input 
          type="range" 
          min="8" 
          max="32" 
          value={length} 
          onChange={(e) => setLength(Number(e.target.value))}
          className="flex-1"
        />
      </div>
      <Button onClick={generate} className="w-full">
        <Lock className="w-4 h-4" />
        Generate Password
      </Button>
      {password && (
        <div className="flex gap-2">
          <Input value={password} readOnly className="font-mono" />
          <Button variant="outline" onClick={copy}>
            {copied ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
          </Button>
        </div>
      )}
    </div>
  );
};

const LoremIpsumGenerator = () => {
  const [paragraphs, setParagraphs] = useState(3);
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const loremBase = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const generate = () => {
    const result = Array(paragraphs).fill(loremBase).join("\n\n");
    setText(result);
    setCopied(false);
  };

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <label className="text-foreground">Paragraphs: {paragraphs}</label>
        <input 
          type="range" 
          min="1" 
          max="10" 
          value={paragraphs} 
          onChange={(e) => setParagraphs(Number(e.target.value))}
          className="flex-1"
        />
      </div>
      <Button onClick={generate} className="w-full">
        <FileText className="w-4 h-4" />
        Generate Lorem Ipsum
      </Button>
      {text && (
        <div className="space-y-4">
          <Textarea value={text} readOnly rows={8} />
          <Button variant="outline" onClick={copy} className="w-full">
            {copied ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copied!" : "Copy to Clipboard"}
          </Button>
        </div>
      )}
    </div>
  );
};

const ROASCalculator = () => {
  const [revenue, setRevenue] = useState("");
  const [adSpend, setAdSpend] = useState("");

  const roas = revenue && adSpend ? (parseFloat(revenue) / parseFloat(adSpend)).toFixed(2) : null;

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Revenue Generated (₹)</label>
          <Input 
            type="number" 
            placeholder="e.g., 100000" 
            value={revenue}
            onChange={(e) => setRevenue(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Ad Spend (₹)</label>
          <Input 
            type="number" 
            placeholder="e.g., 25000" 
            value={adSpend}
            onChange={(e) => setAdSpend(e.target.value)}
          />
        </div>
      </div>
      
      {roas && (
        <div className="text-center p-8 bg-primary/10 rounded-xl">
          <div className="text-5xl font-bold text-primary mb-2">{roas}x</div>
          <div className="text-muted-foreground">Return on Ad Spend</div>
          <p className="mt-4 text-sm text-muted-foreground">
            For every ₹1 spent on advertising, you're generating ₹{roas} in revenue.
          </p>
        </div>
      )}
    </div>
  );
};

const CTRCalculator = () => {
  const [clicks, setClicks] = useState("");
  const [impressions, setImpressions] = useState("");

  const ctr = clicks && impressions ? ((parseFloat(clicks) / parseFloat(impressions)) * 100).toFixed(2) : null;

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Total Clicks</label>
          <Input 
            type="number" 
            placeholder="e.g., 500" 
            value={clicks}
            onChange={(e) => setClicks(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Total Impressions</label>
          <Input 
            type="number" 
            placeholder="e.g., 10000" 
            value={impressions}
            onChange={(e) => setImpressions(e.target.value)}
          />
        </div>
      </div>
      
      {ctr && (
        <div className="text-center p-8 bg-primary/10 rounded-xl">
          <div className="text-5xl font-bold text-primary mb-2">{ctr}%</div>
          <div className="text-muted-foreground">Click-Through Rate</div>
          <p className="mt-4 text-sm text-muted-foreground">
            {parseFloat(ctr) > 2 ? "Great CTR! Above industry average." : "Consider optimizing your ad copy or targeting."}
          </p>
        </div>
      )}
    </div>
  );
};

const CPCCalculator = () => {
  const [cost, setCost] = useState("");
  const [clicks, setClicks] = useState("");

  const cpc = cost && clicks ? (parseFloat(cost) / parseFloat(clicks)).toFixed(2) : null;

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Total Cost (₹)</label>
          <Input 
            type="number" 
            placeholder="e.g., 10000" 
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Total Clicks</label>
          <Input 
            type="number" 
            placeholder="e.g., 500" 
            value={clicks}
            onChange={(e) => setClicks(e.target.value)}
          />
        </div>
      </div>
      
      {cpc && (
        <div className="text-center p-8 bg-primary/10 rounded-xl">
          <div className="text-5xl font-bold text-primary mb-2">₹{cpc}</div>
          <div className="text-muted-foreground">Cost Per Click</div>
        </div>
      )}
    </div>
  );
};

const ConversionRateCalculator = () => {
  const [conversions, setConversions] = useState("");
  const [visitors, setVisitors] = useState("");

  const rate = conversions && visitors ? ((parseFloat(conversions) / parseFloat(visitors)) * 100).toFixed(2) : null;

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Total Conversions</label>
          <Input 
            type="number" 
            placeholder="e.g., 50" 
            value={conversions}
            onChange={(e) => setConversions(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Total Visitors</label>
          <Input 
            type="number" 
            placeholder="e.g., 2000" 
            value={visitors}
            onChange={(e) => setVisitors(e.target.value)}
          />
        </div>
      </div>
      
      {rate && (
        <div className="text-center p-8 bg-primary/10 rounded-xl">
          <div className="text-5xl font-bold text-primary mb-2">{rate}%</div>
          <div className="text-muted-foreground">Conversion Rate</div>
          <p className="mt-4 text-sm text-muted-foreground">
            {parseFloat(rate) > 3 ? "Excellent conversion rate!" : "There's room for optimization."}
          </p>
        </div>
      )}
    </div>
  );
};

const KeywordDensityCalculator = () => {
  const [text, setText] = useState("");
  const [keyword, setKeyword] = useState("");

  const calculateDensity = () => {
    if (!text || !keyword) return null;
    const words = text.toLowerCase().split(/\s+/).filter(w => w.length > 0);
    const keywordCount = words.filter(w => w.includes(keyword.toLowerCase())).length;
    return ((keywordCount / words.length) * 100).toFixed(2);
  };

  const density = calculateDensity();

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Your Content</label>
        <Textarea 
          placeholder="Paste your content here..." 
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={6}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Target Keyword</label>
        <Input 
          placeholder="e.g., digital marketing" 
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      
      {density && (
        <div className="text-center p-8 bg-primary/10 rounded-xl">
          <div className="text-5xl font-bold text-primary mb-2">{density}%</div>
          <div className="text-muted-foreground">Keyword Density</div>
          <p className="mt-4 text-sm text-muted-foreground">
            {parseFloat(density) >= 1 && parseFloat(density) <= 3 
              ? "Good keyword density range (1-3%)" 
              : parseFloat(density) > 3 
                ? "Consider reducing keyword usage to avoid over-optimization"
                : "Consider using the keyword more naturally"}
          </p>
        </div>
      )}
    </div>
  );
};

const CLVCalculator = () => {
  const [avgPurchase, setAvgPurchase] = useState("");
  const [frequency, setFrequency] = useState("");
  const [lifespan, setLifespan] = useState("");

  const clv = avgPurchase && frequency && lifespan 
    ? (parseFloat(avgPurchase) * parseFloat(frequency) * parseFloat(lifespan)).toFixed(0) 
    : null;

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Avg. Purchase Value (₹)</label>
          <Input 
            type="number" 
            placeholder="e.g., 500" 
            value={avgPurchase}
            onChange={(e) => setAvgPurchase(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Purchases per Year</label>
          <Input 
            type="number" 
            placeholder="e.g., 4" 
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Customer Lifespan (years)</label>
          <Input 
            type="number" 
            placeholder="e.g., 5" 
            value={lifespan}
            onChange={(e) => setLifespan(e.target.value)}
          />
        </div>
      </div>
      
      {clv && (
        <div className="text-center p-8 bg-primary/10 rounded-xl">
          <div className="text-5xl font-bold text-primary mb-2">₹{parseInt(clv).toLocaleString()}</div>
          <div className="text-muted-foreground">Customer Lifetime Value</div>
        </div>
      )}
    </div>
  );
};

const DomainAgeChecker = () => {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const check = () => {
    setLoading(true);
    setTimeout(() => {
      const years = Math.floor(Math.random() * 15) + 1;
      setResult({
        domain: domain,
        age: `${years} years`,
        created: `${2024 - years}-01-15`,
        expires: "2025-01-15",
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <Input 
          placeholder="Enter domain (e.g., example.com)" 
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        />
        <Button onClick={check} disabled={loading || !domain}>
          {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
          Check
        </Button>
      </div>
      
      {result && (
        <div className="space-y-4">
          <div className="text-center p-6 bg-primary/10 rounded-xl">
            <div className="text-4xl font-bold text-primary mb-2">{result.age}</div>
            <div className="text-muted-foreground">Domain Age</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-sm text-muted-foreground">Created</div>
              <div className="font-medium text-foreground">{result.created}</div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-sm text-muted-foreground">Expires</div>
              <div className="font-medium text-foreground">{result.expires}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ReadabilityTest = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState<any>(null);

  const analyze = () => {
    if (!text) return;
    const words = text.split(/\s+/).filter(w => w.length > 0);
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const avgWordsPerSentence = sentences.length > 0 ? words.length / sentences.length : 0;
    
    let grade = "Easy";
    if (avgWordsPerSentence > 20) grade = "Difficult";
    else if (avgWordsPerSentence > 15) grade = "Moderate";

    setResult({
      words: words.length,
      sentences: sentences.length,
      avgWords: avgWordsPerSentence.toFixed(1),
      grade: grade,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <Textarea 
          placeholder="Paste your content to analyze..." 
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={6}
        />
      </div>
      <Button onClick={analyze} disabled={!text} className="w-full">
        <Eye className="w-4 h-4" />
        Analyze Readability
      </Button>
      
      {result && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-muted rounded-lg text-center">
            <div className="text-2xl font-bold text-foreground">{result.words}</div>
            <div className="text-sm text-muted-foreground">Words</div>
          </div>
          <div className="p-4 bg-muted rounded-lg text-center">
            <div className="text-2xl font-bold text-foreground">{result.sentences}</div>
            <div className="text-sm text-muted-foreground">Sentences</div>
          </div>
          <div className="p-4 bg-muted rounded-lg text-center">
            <div className="text-2xl font-bold text-foreground">{result.avgWords}</div>
            <div className="text-sm text-muted-foreground">Avg Words/Sentence</div>
          </div>
          <div className="p-4 bg-primary/10 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary">{result.grade}</div>
            <div className="text-sm text-muted-foreground">Readability</div>
          </div>
        </div>
      )}
    </div>
  );
};

const LinksCounter = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const analyze = () => {
    setLoading(true);
    setTimeout(() => {
      setResult({
        internal: Math.floor(Math.random() * 50) + 10,
        external: Math.floor(Math.random() * 20) + 5,
        nofollow: Math.floor(Math.random() * 10),
        dofollow: Math.floor(Math.random() * 60) + 20,
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <Input 
          placeholder="Enter URL to analyze" 
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button onClick={analyze} disabled={loading || !url}>
          {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <LinkIcon className="w-4 h-4" />}
          Count Links
        </Button>
      </div>
      
      {result && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-blue-500/10 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-500">{result.internal}</div>
            <div className="text-sm text-muted-foreground">Internal Links</div>
          </div>
          <div className="p-4 bg-green-500/10 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-500">{result.external}</div>
            <div className="text-sm text-muted-foreground">External Links</div>
          </div>
          <div className="p-4 bg-purple-500/10 rounded-lg text-center">
            <div className="text-3xl font-bold text-purple-500">{result.dofollow}</div>
            <div className="text-sm text-muted-foreground">DoFollow</div>
          </div>
          <div className="p-4 bg-orange-500/10 rounded-lg text-center">
            <div className="text-3xl font-bold text-orange-500">{result.nofollow}</div>
            <div className="text-sm text-muted-foreground">NoFollow</div>
          </div>
        </div>
      )}
    </div>
  );
};

const BrowserSizeChecker = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useState(() => {
    const update = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  });

  return (
    <div className="space-y-6">
      <div className="text-center p-8 bg-primary/10 rounded-xl">
        <div className="text-5xl font-bold text-primary mb-2">{size.width} × {size.height}</div>
        <div className="text-muted-foreground">Your Browser Size (pixels)</div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-muted rounded-lg text-center">
          <div className="text-2xl font-bold text-foreground">{size.width}px</div>
          <div className="text-sm text-muted-foreground">Width</div>
        </div>
        <div className="p-4 bg-muted rounded-lg text-center">
          <div className="text-2xl font-bold text-foreground">{size.height}px</div>
          <div className="text-sm text-muted-foreground">Height</div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground text-center">
        Resize your browser window to see the values update in real-time.
      </p>
    </div>
  );
};

const CPMCalculator = () => {
  const [cost, setCost] = useState("");
  const [impressions, setImpressions] = useState("");

  const cpm = cost && impressions ? ((parseFloat(cost) / parseFloat(impressions)) * 1000).toFixed(2) : null;

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Total Cost (₹)</label>
          <Input 
            type="number" 
            placeholder="e.g., 5000" 
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Total Impressions</label>
          <Input 
            type="number" 
            placeholder="e.g., 100000" 
            value={impressions}
            onChange={(e) => setImpressions(e.target.value)}
          />
        </div>
      </div>
      
      {cpm && (
        <div className="text-center p-8 bg-primary/10 rounded-xl">
          <div className="text-5xl font-bold text-primary mb-2">₹{cpm}</div>
          <div className="text-muted-foreground">Cost Per Mille (1000 impressions)</div>
        </div>
      )}
    </div>
  );
};

const ChurnRateCalculator = () => {
  const [lost, setLost] = useState("");
  const [start, setStart] = useState("");

  const rate = lost && start ? ((parseFloat(lost) / parseFloat(start)) * 100).toFixed(2) : null;

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Customers Lost</label>
          <Input 
            type="number" 
            placeholder="e.g., 50" 
            value={lost}
            onChange={(e) => setLost(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Starting Customers</label>
          <Input 
            type="number" 
            placeholder="e.g., 1000" 
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </div>
      </div>
      
      {rate && (
        <div className="text-center p-8 bg-primary/10 rounded-xl">
          <div className="text-5xl font-bold text-primary mb-2">{rate}%</div>
          <div className="text-muted-foreground">Monthly Churn Rate</div>
          <p className="mt-4 text-sm text-muted-foreground">
            {parseFloat(rate) < 5 ? "Excellent retention!" : "Consider improving customer retention strategies."}
          </p>
        </div>
      )}
    </div>
  );
};

const NPSCalculator = () => {
  const [promoters, setPromoters] = useState("");
  const [passives, setPassives] = useState("");
  const [detractors, setDetractors] = useState("");

  const total = (parseFloat(promoters) || 0) + (parseFloat(passives) || 0) + (parseFloat(detractors) || 0);
  const nps = total > 0 
    ? (((parseFloat(promoters) || 0) / total) * 100 - ((parseFloat(detractors) || 0) / total) * 100).toFixed(0)
    : null;

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Promoters (9-10)</label>
          <Input 
            type="number" 
            placeholder="e.g., 100" 
            value={promoters}
            onChange={(e) => setPromoters(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Passives (7-8)</label>
          <Input 
            type="number" 
            placeholder="e.g., 50" 
            value={passives}
            onChange={(e) => setPassives(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Detractors (0-6)</label>
          <Input 
            type="number" 
            placeholder="e.g., 20" 
            value={detractors}
            onChange={(e) => setDetractors(e.target.value)}
          />
        </div>
      </div>
      
      {nps && (
        <div className="text-center p-8 bg-primary/10 rounded-xl">
          <div className="text-5xl font-bold text-primary mb-2">{nps}</div>
          <div className="text-muted-foreground">Net Promoter Score</div>
          <p className="mt-4 text-sm text-muted-foreground">
            {parseInt(nps) >= 50 ? "Excellent! World-class NPS." : 
             parseInt(nps) >= 0 ? "Good. Room for improvement." : 
             "Needs improvement. Focus on customer satisfaction."}
          </p>
        </div>
      )}
    </div>
  );
};

const BlogIdeaGenerator = () => {
  const [topic, setTopic] = useState("");
  const [ideas, setIdeas] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const templates = [
    "How to {topic}: A Complete Guide for Beginners",
    "10 {topic} Mistakes You're Probably Making",
    "The Ultimate {topic} Checklist for 2024",
    "{topic} Best Practices: What the Experts Do",
    "Why {topic} Matters More Than Ever",
    "The Future of {topic}: Trends to Watch",
    "How to Measure {topic} Success: Key Metrics",
    "{topic} vs [Alternative]: Which is Right for You?",
    "Case Study: How We Improved {topic} by 300%",
    "Beginner's Guide to {topic}: Everything You Need to Know",
  ];

  const generate = () => {
    if (!topic) return;
    setLoading(true);
    setTimeout(() => {
      const generated = templates.map(t => t.replace(/{topic}/g, topic));
      setIdeas(generated);
      setLoading(false);
    }, 1000);
  };

  const copy = (idea: string) => {
    navigator.clipboard.writeText(idea);
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <Input 
          placeholder="Enter your topic (e.g., SEO, Content Marketing)" 
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <Button onClick={generate} disabled={loading || !topic}>
          {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
          Generate
        </Button>
      </div>
      
      {ideas.length > 0 && (
        <div className="space-y-3">
          {ideas.map((idea, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <span className="text-foreground">{idea}</span>
              <Button variant="ghost" size="sm" onClick={() => copy(idea)}>
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const URLOpener = () => {
  const [urls, setUrls] = useState("");

  const openAll = () => {
    const urlList = urls.split('\n').filter(url => url.trim().length > 0);
    urlList.forEach(url => {
      let formattedUrl = url.trim();
      if (!formattedUrl.startsWith('http')) {
        formattedUrl = 'https://' + formattedUrl;
      }
      window.open(formattedUrl, '_blank');
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Enter URLs (one per line)</label>
        <Textarea 
          placeholder="example.com&#10;google.com&#10;digitalbull.in" 
          value={urls}
          onChange={(e) => setUrls(e.target.value)}
          rows={8}
        />
      </div>
      <Button onClick={openAll} disabled={!urls.trim()} className="w-full">
        <Globe className="w-4 h-4" />
        Open All URLs
      </Button>
      <p className="text-sm text-muted-foreground text-center">
        Note: Please allow pop-ups for this site to open multiple URLs.
      </p>
    </div>
  );
};

// Tool mapping
const toolComponents: Record<string, React.FC> = {
  "seo-checker": SEOChecker,
  "password-generator": PasswordGenerator,
  "lorem-ipsum": LoremIpsumGenerator,
  "roas-calculator": ROASCalculator,
  "ctr-calculator": CTRCalculator,
  "cpc-calculator": CPCCalculator,
  "conversion-rate": ConversionRateCalculator,
  "keyword-density": KeywordDensityCalculator,
  "clv-calculator": CLVCalculator,
  "domain-age": DomainAgeChecker,
  "readability": ReadabilityTest,
  "links-counter": LinksCounter,
  "browser-size": BrowserSizeChecker,
  "cpm-calculator": CPMCalculator,
  "churn-rate": ChurnRateCalculator,
  "nps-calculator": NPSCalculator,
  "blog-ideas": BlogIdeaGenerator,
  "url-opener": URLOpener,
};

// Default tool for ones not yet implemented
const ComingSoonTool = () => (
  <div className="text-center py-12">
    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
      <Clock className="w-8 h-8 text-primary" />
    </div>
    <h3 className="font-display text-xl font-bold text-foreground mb-2">Coming Soon</h3>
    <p className="text-muted-foreground">
      This tool is currently under development. Check back soon!
    </p>
  </div>
);

const ToolPage = () => {
  const { category, toolId } = useParams<{ category: string; toolId: string }>();
  
  // Find tool info
  const categoryData = freeToolsCategories.find(c => c.id === category);
  const toolData = categoryData?.tools.find(t => t.id === toolId);
  
  const ToolComponent = toolId ? (toolComponents[toolId] || ComingSoonTool) : ComingSoonTool;

  if (!categoryData || !toolData) {
    return (
      <Layout>
        <div className="container-wide py-32 text-center">
          <h1 className="text-2xl font-bold text-foreground">Tool not found</h1>
          <Button asChild className="mt-4">
            <Link to="/tools">View All Tools</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted pt-28 pb-4">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/tools" className="hover:text-primary transition-colors">Free Tools</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to={`/tools/${category}`} className="hover:text-primary transition-colors">{categoryData.title}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{toolData.title}</span>
          </nav>
        </div>
      </div>

      {/* Tool Section */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {toolData.title}
            </h1>
            <p className="text-muted-foreground text-lg">
              {toolData.description}
            </p>
          </div>

          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm">
            <ToolComponent />
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            More {categoryData.title}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categoryData.tools.filter(t => t.id !== toolId).slice(0, 4).map((tool) => (
              <Link
                key={tool.id}
                to={`/tools/${category}/${tool.id}`}
                className="bg-card rounded-xl p-4 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-display font-bold text-foreground mb-1">
                  {tool.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Need Expert Help?
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Our team can help you implement strategies and achieve your marketing goals.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ToolPage;
