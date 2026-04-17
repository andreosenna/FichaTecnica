import React, { useState, useEffect } from 'react'
import supabase from '../../conexao/conexao'
import { useLocation, useParams } from 'react-router-dom';

export default function RNCCompleta() {
  const location = useLocation();
  const { id } = useParams();
  const [rnc, setRNC] = useState(location.state?.data ?? null)
  const [loading, setLoading] = useState(!location.state?.data)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const carregarRNC = async () => {
      if (!id) return

      try {
        setLoading(true)
        const { data, error } = await supabase
          .from('tb_cabRNC')
          .select('*')
          .eq('id', id)
          .single()

        if (error) {
          throw error
        }

        setRNC(data)
      } catch (e) {
        console.log(e)
        setError('Não foi possível carregar a RNC.')
      } finally {
        setLoading(false)
      }
    }

    carregarRNC()
  }, [id])

  //economizar codigo e processamento criando função genérica para atualizar campos da RNC
  const handleChange = (field, value) => {
    setRNC(prev => ({ ...prev, [field]: value }))
  }

  const handleSalvar = async () => {
    if (!rnc?.id) return

    setSaving(true)

    try {
      const updateData = { ...rnc }
      delete updateData.id

      const { error } = await supabase
        .from('tb_cabRNC')
        .update(updateData)
        .eq('id', rnc.id)

      if (error) {
        throw error
      }

      alert('RNC atualizada com sucesso!')
    } catch (e) {
      console.log(e)
      alert('Erro ao salvar RNC: ' + e.message)
    } finally {
      setSaving(false)
    }
  }

  const formatDate = value => {
    if (!value) return ''
    return value.toString().split('T')[0]
  }

  if (loading) return <p>Carregando RNC...</p>
  if (error) return <p>{error}</p>
  if (!rnc) return <p>RNC não encontrada.</p>

  return (
    <>
      <h1>RNC Completa</h1>
      <div>
        <div><label>ID RNC</label><input type="text" value={rnc.id || ''} readOnly /></div>
        <div><label>Status</label><input type="text" value={rnc.statusRNC || ''} onChange={e => handleChange('statusRNC', e.target.value)} /></div>
        <div><label>Data de Criação</label><input type="date" value={formatDate(rnc.created_at)} onChange={e => handleChange('created_at', e.target.value)} /></div>
        <div><label>Criador</label><input type="text" value={rnc.criadorRNC || ''} onChange={e => handleChange('criadorRNC', e.target.value)} /></div>
        <div><label>Origem</label><input type="text" value={rnc.origemRNC || ''} onChange={e => handleChange('origemRNC', e.target.value)} /></div>
        <div><label>Destino</label><input type="text" value={rnc.destinoRNC || ''} onChange={e => handleChange('destinoRNC', e.target.value)} /></div>
        <div><label>Relato</label><textarea value={rnc.relatoRNC || ''} onChange={e => handleChange('relatoRNC', e.target.value)} /></div>
        <div><label>Tipo RNC</label><input type="text" value={rnc.tipoRNC || ''} onChange={e => handleChange('tipoRNC', e.target.value)} /></div>
        <div><label>Evidência</label><textarea value={rnc.evidenciaRNC || ''} onChange={e => handleChange('evidenciaRNC', e.target.value)} /></div>
        <div><label>Referência</label><textarea value={rnc.referenciaRNC || ''} onChange={e => handleChange('referenciaRNC', e.target.value)} /></div>
        <div><label>Data Previsão</label><input type="date" value={formatDate(rnc.dataPrevisao)} onChange={e => handleChange('dataPrevisao', e.target.value)} /></div>
        <div><label>Data Contenção</label><input type="date" value={formatDate(rnc.dataContencao)} onChange={e => handleChange('dataContencao', e.target.value)} /></div>
        <div><label>Causas</label><textarea value={rnc.causasRNC || ''} onChange={e => handleChange('causasRNC', e.target.value)} /></div>
        <div><label>Responsável</label><input type="text" value={rnc.responsavelRNC || ''} onChange={e => handleChange('responsavelRNC', e.target.value)} /></div>
        <div><label>Avaliação</label><textarea value={rnc.avaliacaoRNC || ''} onChange={e => handleChange('avaliacaoRNC', e.target.value)} /></div>
        <div><label>Responsável Avaliação</label><input type="text" value={rnc.responsavelAvaliacao || ''} onChange={e => handleChange('responsavelAvaliacao', e.target.value)} /></div>
        <div><label>Data Conclusão</label><input type="date" value={formatDate(rnc.dataConclusao)} onChange={e => handleChange('dataConclusao', e.target.value)} /></div>
        <button onClick={handleSalvar} disabled={saving}>{saving ? 'Salvando...' : 'Salvar Alterações'}</button>
      </div>
    </>
  )
}
