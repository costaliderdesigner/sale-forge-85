import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Calculator, TrendingUp, DollarSign, Target, Download, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const CalculadoraROI = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    visitantesMensais: '',
    taxaConversaoAtual: '',
    ticketMedio: '',
    custoTrafego: '',
    metaConversao: ''
  })

  const [resultados, setResultados] = useState(null)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const calcularROI = () => {
    const visitantes = parseFloat(formData.visitantesMensais) || 0
    const taxaAtual = parseFloat(formData.taxaConversaoAtual) || 0
    const ticket = parseFloat(formData.ticketMedio) || 0
    const custo = parseFloat(formData.custoTrafego) || 0
    const metaConversao = parseFloat(formData.metaConversao) || 0

    if (visitantes === 0 || taxaAtual === 0 || ticket === 0) {
      alert('Por favor, preencha todos os campos obrigatórios')
      return
    }

    // Cálculos situação atual
    const conversesAtual = visitantes * (taxaAtual / 100)
    const receitaAtual = conversesAtual * ticket
    const roiAtual = custo > 0 ? ((receitaAtual - custo) / custo) * 100 : 0

    // Cálculos situação otimizada
    const novaConversao = metaConversao > 0 ? metaConversao : taxaAtual * 1.42
    const conversesOtimizada = visitantes * (novaConversao / 100)
    const receitaOtimizada = conversesOtimizada * ticket
    const roiOtimizado = custo > 0 ? ((receitaOtimizada - custo) / custo) * 100 : 0

    // Melhorias
    const aumentoConversoes = conversesOtimizada - conversesAtual
    const aumentoReceita = receitaOtimizada - receitaAtual
    const melhoriaPercentual = ((novaConversao - taxaAtual) / taxaAtual) * 100

    setResultados({
      situacaoAtual: {
        conversoes: Math.round(conversesAtual),
        receita: receitaAtual,
        roi: roiAtual
      },
      situacaoOtimizada: {
        conversoes: Math.round(conversesOtimizada),
        receita: receitaOtimizada,
        roi: roiOtimizado,
        taxaConversao: novaConversao
      },
      melhorias: {
        conversoes: Math.round(aumentoConversoes),
        receita: aumentoReceita,
        percentual: melhoriaPercentual
      }
    })
  }

  const formatarMoeda = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor)
  }

  const gerarRelatorio = () => {
    if (!resultados) return

    const relatorio = `
RELATÓRIO DE POTENCIAL DE ROI - LANDING PAGE
============================================

DADOS INSERIDOS:
• Visitantes mensais: ${formData.visitantesMensais}
• Taxa de conversão atual: ${formData.taxaConversaoAtual}%
• Ticket médio: ${formatarMoeda(parseFloat(formData.ticketMedio))}
• Custo mensal com tráfego: ${formatarMoeda(parseFloat(formData.custoTrafego))}

SITUAÇÃO ATUAL:
• Conversões mensais: ${resultados.situacaoAtual.conversoes}
• Receita mensal: ${formatarMoeda(resultados.situacaoAtual.receita)}
• ROI atual: ${resultados.situacaoAtual.roi.toFixed(1)}%

SITUAÇÃO OTIMIZADA:
• Nova taxa de conversão: ${resultados.situacaoOtimizada.taxaConversao.toFixed(2)}%
• Conversões mensais: ${resultados.situacaoOtimizada.conversoes}
• Receita mensal: ${formatarMoeda(resultados.situacaoOtimizada.receita)}
• ROI otimizado: ${resultados.situacaoOtimizada.roi.toFixed(1)}%

POTENCIAL DE MELHORIA:
• Aumento em conversões: +${resultados.melhorias.conversoes} por mês
• Aumento em receita: +${formatarMoeda(resultados.melhorias.receita)} por mês
• Melhoria percentual: +${resultados.melhorias.percentual.toFixed(1)}%

PROJEÇÃO ANUAL:
• Receita adicional: ${formatarMoeda(resultados.melhorias.receita * 12)}
• Conversões adicionais: ${resultados.melhorias.conversoes * 12}

============================================
Relatório gerado por Costa Líder Designer
Especialistas em Landing Pages que Convertem
    `

    const blob = new Blob([relatorio], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'relatorio-roi-landing-page.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const scrollToSection = (sectionId: string) => {
    navigate('/')
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-primary/5 p-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 pt-8">
              <Button
                onClick={() => navigate('/')}
                variant="ghost"
                size="sm"
                className="mb-6 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao site
              </Button>
              
              <div className="flex items-center justify-center mb-4">
                <Calculator className="h-12 w-12 text-primary mr-3" />
                <h1 className="text-4xl font-bold text-brand-teal">Calculadora de ROI</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-2">Descubra o potencial de melhoria da sua Landing Page</p>
              <p className="text-sm text-muted-foreground/80">Por Costa Líder Designer - Especialistas em Landing Pages que Convertem</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Formulário */}
              <Card className="shadow-elegant border-border/50">
                <CardHeader className="bg-gradient-subtle rounded-t-lg">
                  <CardTitle className="flex items-center text-foreground">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Dados da Sua Situação Atual
                  </CardTitle>
                  <CardDescription>
                    Preencha os dados abaixo para calcular o potencial de melhoria
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div>
                    <Label htmlFor="visitantes" className="text-sm font-medium">Visitantes mensais na sua landing page *</Label>
                    <Input
                      id="visitantes"
                      type="number"
                      placeholder="Ex: 5000"
                      value={formData.visitantesMensais}
                      onChange={(e) => handleInputChange('visitantesMensais', e.target.value)}
                      className="mt-2 border-border/50 focus:border-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="conversao" className="text-sm font-medium">Taxa de conversão atual (%) *</Label>
                    <Input
                      id="conversao"
                      type="number"
                      step="0.1"
                      placeholder="Ex: 2.5"
                      value={formData.taxaConversaoAtual}
                      onChange={(e) => handleInputChange('taxaConversaoAtual', e.target.value)}
                      className="mt-2 border-border/50 focus:border-primary"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Se não souber, use 1.5% (média do mercado)</p>
                  </div>

                  <div>
                    <Label htmlFor="ticket" className="text-sm font-medium">Ticket médio por conversão (R$) *</Label>
                    <Input
                      id="ticket"
                      type="number"
                      step="0.01"
                      placeholder="Ex: 297.00"
                      value={formData.ticketMedio}
                      onChange={(e) => handleInputChange('ticketMedio', e.target.value)}
                      className="mt-2 border-border/50 focus:border-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="custo" className="text-sm font-medium">Custo mensal com tráfego (R$)</Label>
                    <Input
                      id="custo"
                      type="number"
                      step="0.01"
                      placeholder="Ex: 10000.00"
                      value={formData.custoTrafego}
                      onChange={(e) => handleInputChange('custoTrafego', e.target.value)}
                      className="mt-2 border-border/50 focus:border-primary"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Opcional - para cálculo do ROI</p>
                  </div>

                  <div>
                    <Label htmlFor="meta" className="text-sm font-medium">Meta de conversão (%) - Opcional</Label>
                    <Input
                      id="meta"
                      type="number"
                      step="0.1"
                      placeholder="Ex: 4.2"
                      value={formData.metaConversao}
                      onChange={(e) => handleInputChange('metaConversao', e.target.value)}
                      className="mt-2 border-border/50 focus:border-primary"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Se não preencher, usaremos +42% (nossa média)</p>
                  </div>

                  <Button 
                    onClick={calcularROI} 
                    className="w-full bg-gradient-primary hover:bg-gradient-brand shadow-brand"
                    size="lg"
                  >
                    <Calculator className="h-4 w-4 mr-2" />
                    Calcular Potencial de ROI
                  </Button>
                </CardContent>
              </Card>

              {/* Resultados */}
              {resultados && (
                <div className="space-y-6">
                  {/* Situação Atual */}
                  <Card className="shadow-elegant border-destructive/20">
                    <CardHeader className="bg-destructive/5">
                      <CardTitle className="text-destructive">📊 Situação Atual</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="bg-destructive/5 p-4 rounded-lg border border-destructive/20">
                          <p className="text-sm text-destructive font-medium">Conversões mensais</p>
                          <p className="text-2xl font-bold text-destructive">{resultados.situacaoAtual.conversoes}</p>
                        </div>
                        <div className="bg-destructive/5 p-4 rounded-lg border border-destructive/20">
                          <p className="text-sm text-destructive font-medium">Receita mensal</p>
                          <p className="text-2xl font-bold text-destructive">{formatarMoeda(resultados.situacaoAtual.receita)}</p>
                        </div>
                        {formData.custoTrafego && (
                          <div className="bg-destructive/5 p-4 rounded-lg border border-destructive/20">
                            <p className="text-sm text-destructive font-medium">ROI atual</p>
                            <p className="text-2xl font-bold text-destructive">{resultados.situacaoAtual.roi.toFixed(1)}%</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Situação Otimizada */}
                  <Card className="shadow-elegant border-emerald-200 dark:border-emerald-800">
                    <CardHeader className="bg-emerald-50 dark:bg-emerald-950/30">
                      <CardTitle className="text-emerald-600 dark:text-emerald-400">🚀 Situação Otimizada</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="bg-emerald-50 dark:bg-emerald-950/30 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
                          <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">Nova taxa de conversão</p>
                          <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">{resultados.situacaoOtimizada.taxaConversao.toFixed(2)}%</p>
                        </div>
                        <div className="bg-emerald-50 dark:bg-emerald-950/30 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
                          <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">Conversões mensais</p>
                          <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">{resultados.situacaoOtimizada.conversoes}</p>
                        </div>
                        <div className="bg-emerald-50 dark:bg-emerald-950/30 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
                          <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">Receita mensal</p>
                          <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">{formatarMoeda(resultados.situacaoOtimizada.receita)}</p>
                        </div>
                        {formData.custoTrafego && (
                          <div className="bg-emerald-50 dark:bg-emerald-950/30 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
                            <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">ROI otimizado</p>
                            <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">{resultados.situacaoOtimizada.roi.toFixed(1)}%</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Potencial de Melhoria */}
                  <Card className="shadow-elegant border-primary/20 bg-gradient-subtle">
                    <CardHeader className="bg-gradient-primary/10">
                      <CardTitle className="flex items-center text-primary">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        Potencial de Melhoria
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="bg-card p-4 rounded-lg border border-primary/20">
                          <p className="text-sm text-primary font-medium">Aumento em conversões</p>
                          <p className="text-3xl font-bold text-primary">+{resultados.melhorias.conversoes}/mês</p>
                        </div>
                        <div className="bg-card p-4 rounded-lg border border-primary/20">
                          <p className="text-sm text-primary font-medium">Aumento em receita</p>
                          <p className="text-3xl font-bold text-primary">+{formatarMoeda(resultados.melhorias.receita)}/mês</p>
                        </div>
                        <div className="bg-card p-4 rounded-lg border border-primary/20">
                          <p className="text-sm text-primary font-medium">Melhoria percentual</p>
                          <p className="text-3xl font-bold text-primary">+{resultados.melhorias.percentual.toFixed(1)}%</p>
                        </div>
                        <div className="bg-gradient-brand/10 p-4 rounded-lg border border-brand/30">
                          <p className="text-sm text-brand font-medium">Potencial anual adicional</p>
                          <p className="text-3xl font-bold text-brand">{formatarMoeda(resultados.melhorias.receita * 12)}</p>
                        </div>
                      </div>

                      <div className="mt-6 space-y-3">
                        <Button 
                          onClick={gerarRelatorio}
                          className="w-full bg-gradient-primary hover:bg-gradient-brand shadow-brand"
                          size="lg"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Baixar Relatório Completo
                        </Button>
                        
                        <div className="text-center p-4 bg-card rounded-lg border border-border/50">
                          <p className="text-sm text-foreground mb-2">
                            <strong>Quer transformar esse potencial em realidade?</strong>
                          </p>
                          <p className="text-xs text-muted-foreground mb-3">
                            A Costa Líder Designer já ajudou 500+ empresários a aumentar suas conversões em até 42%
                          </p>
                          <Button 
                            className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600"
                            onClick={() => scrollToSection('contato')}
                          >
                            <DollarSign className="h-4 w-4 mr-2" />
                            Falar com Especialista
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>

            {/* Footer da página */}
            <div className="text-center mt-12 p-6 bg-card rounded-lg shadow-elegant border border-border/50">
              <h3 className="text-lg font-semibold text-foreground mb-2">Costa Líder Designer</h3>
              <p className="text-muted-foreground mb-4">Especialistas em Landing Pages que Convertem</p>
              <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
                <span>500+ Clientes Atendidos</span>
                <span>R$ 2.3M+ em Vendas Geradas</span>
                <span>4.9/5 Avaliação Média</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default CalculadoraROI