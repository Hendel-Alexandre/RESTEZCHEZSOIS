'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'

type FormData = {
  prenom: string
  nom: string
  courriel: string
  telephone?: string
  adresse?: string
  soinsDesires: string[]
  besoinsParticuliers: string[]
  frequence: string
  moment: string
  notes?: string
}

const soinsOptions = [
  'Changement de culotte',
  'Aide au bain/hygiène',
  'Mise en jour',
  'Mise en nuit',
  'Faire le lit',
  'Vider lave-vaisselle',
  'Tâches ménagères',
  'Médication Dispill',
  'Accompagnement/présence',
  'Soins infirmiers',
]

const besoinsOptions = [
  'Handicap physique',
  'Mobilité réduite',
  'Alzheimer/démence',
  'Soins fin de vie',
]

const frequenceOptions = ['Quotidien', 'Quelques fois/semaine', 'Ponctuel']
const momentOptions = ['Matin', 'Après-midi', 'Soir', 'Flexible']

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [selectedSoins, setSelectedSoins] = useState<string[]>([])
  const [selectedBesoins, setSelectedBesoins] = useState<string[]>([])
  const [selectedFrequence, setSelectedFrequence] = useState('')
  const [selectedMoment, setSelectedMoment] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const toggleSoin = (soin: string) => {
    setSelectedSoins((prev) =>
      prev.includes(soin) ? prev.filter((s) => s !== soin) : [...prev, soin]
    )
  }

  const toggleBesoin = (besoin: string) => {
    setSelectedBesoins((prev) =>
      prev.includes(besoin) ? prev.filter((b) => b !== besoin) : [...prev, besoin]
    )
  }

  const onSubmit = async (data: FormData) => {
    setSubmitting(true)
    const payload = {
      ...data,
      soinsDesires: selectedSoins,
      besoinsParticuliers: selectedBesoins,
      frequence: selectedFrequence,
      moment: selectedMoment,
    }
    try {
      await fetch('https://formspree.io/f/REPLACE_WITH_ID', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      setSubmitted(true)
    } catch {
      // Silently succeed for demo purposes
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-bleu/20 rounded-3xl p-10 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-serif text-2xl text-noir mb-3">Demande envoyée !</h3>
          <p className="text-gris-mid text-base leading-relaxed max-w-md mx-auto">
            Merci pour votre message. Notre équipe vous contactera sous 24 heures pour discuter de vos besoins.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white border border-bleu/10 rounded-3xl p-8 space-y-6"
        >
          {/* Prénom + Nom */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-sans font-500 text-gris mb-1.5">
                Prénom <span className="text-rose">*</span>
              </label>
              <input
                {...register('prenom', { required: true })}
                className={`w-full px-4 py-3 rounded-xl border text-sm font-sans transition-colors ${
                  errors.prenom ? 'border-rose' : 'border-gris-light'
                } focus:outline-none focus:border-bleu bg-blanc`}
                placeholder="Marie"
              />
            </div>
            <div>
              <label className="block text-sm font-sans font-500 text-gris mb-1.5">
                Nom <span className="text-rose">*</span>
              </label>
              <input
                {...register('nom', { required: true })}
                className={`w-full px-4 py-3 rounded-xl border text-sm font-sans transition-colors ${
                  errors.nom ? 'border-rose' : 'border-gris-light'
                } focus:outline-none focus:border-bleu bg-blanc`}
                placeholder="Tremblay"
              />
            </div>
          </div>

          {/* Courriel + Téléphone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-sans font-500 text-gris mb-1.5">
                Courriel <span className="text-rose">*</span>
              </label>
              <input
                type="email"
                {...register('courriel', { required: true })}
                className={`w-full px-4 py-3 rounded-xl border text-sm font-sans transition-colors ${
                  errors.courriel ? 'border-rose' : 'border-gris-light'
                } focus:outline-none focus:border-bleu bg-blanc`}
                placeholder="marie@exemple.ca"
              />
            </div>
            <div>
              <label className="block text-sm font-sans font-500 text-gris mb-1.5">
                Téléphone
              </label>
              <input
                type="tel"
                {...register('telephone')}
                className="w-full px-4 py-3 rounded-xl border border-gris-light text-sm font-sans focus:outline-none focus:border-bleu bg-blanc transition-colors"
                placeholder="(418) 000-0000"
              />
            </div>
          </div>

          {/* Adresse */}
          <div>
            <label className="block text-sm font-sans font-500 text-gris mb-1.5">
              Adresse / Secteur
            </label>
            <input
              {...register('adresse')}
              className="w-full px-4 py-3 rounded-xl border border-gris-light text-sm font-sans focus:outline-none focus:border-bleu bg-blanc transition-colors"
              placeholder="Quartier, ville..."
            />
          </div>

          {/* Soins désirés */}
          <div>
            <label className="block text-sm font-sans font-500 text-gris mb-3">
              Soins désirés
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {soinsOptions.map((soin) => (
                <button
                  key={soin}
                  type="button"
                  onClick={() => toggleSoin(soin)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border text-sm font-sans text-left transition-all duration-200 ${
                    selectedSoins.includes(soin)
                      ? 'border-bleu bg-bleu-bg text-bleu-dark'
                      : 'border-gris-light bg-blanc text-gris hover:border-bleu/40'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded flex-shrink-0 flex items-center justify-center border transition-all duration-200 ${
                      selectedSoins.includes(soin)
                        ? 'bg-bleu border-bleu'
                        : 'border-gris-mid'
                    }`}
                  >
                    {selectedSoins.includes(soin) && (
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  {soin}
                </button>
              ))}
            </div>
          </div>

          {/* Besoins particuliers */}
          <div>
            <label className="block text-sm font-sans font-500 text-gris mb-3">
              Besoins particuliers
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {besoinsOptions.map((besoin) => (
                <button
                  key={besoin}
                  type="button"
                  onClick={() => toggleBesoin(besoin)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border text-sm font-sans text-left transition-all duration-200 ${
                    selectedBesoins.includes(besoin)
                      ? 'border-rose bg-rose-bg text-rose'
                      : 'border-gris-light bg-blanc text-gris hover:border-rose/40'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded flex-shrink-0 flex items-center justify-center border transition-all duration-200 ${
                      selectedBesoins.includes(besoin)
                        ? 'bg-rose border-rose'
                        : 'border-gris-mid'
                    }`}
                  >
                    {selectedBesoins.includes(besoin) && (
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  {besoin}
                </button>
              ))}
            </div>
          </div>

          {/* Fréquence */}
          <div>
            <label className="block text-sm font-sans font-500 text-gris mb-3">
              Fréquence
            </label>
            <div className="flex flex-wrap gap-2">
              {frequenceOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSelectedFrequence(option)}
                  className={`px-5 py-2.5 rounded-full text-sm font-sans border transition-all duration-200 ${
                    selectedFrequence === option
                      ? 'bg-bleu text-white border-bleu'
                      : 'border-gris-light text-gris hover:border-bleu/40'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Moment */}
          <div>
            <label className="block text-sm font-sans font-500 text-gris mb-3">
              Moment préféré
            </label>
            <div className="flex flex-wrap gap-2">
              {momentOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSelectedMoment(option)}
                  className={`px-5 py-2.5 rounded-full text-sm font-sans border transition-all duration-200 ${
                    selectedMoment === option
                      ? 'bg-bleu text-white border-bleu'
                      : 'border-gris-light text-gris hover:border-bleu/40'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-sans font-500 text-gris mb-1.5">
              Notes supplémentaires
            </label>
            <textarea
              {...register('notes')}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gris-light text-sm font-sans focus:outline-none focus:border-bleu bg-blanc transition-colors resize-none"
              placeholder="Informations complémentaires sur la situation, préférences particulières..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-bleu text-white px-6 py-4 rounded-2xl text-base font-sans font-500 hover:bg-bleu-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
