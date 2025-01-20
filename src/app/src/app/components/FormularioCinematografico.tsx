'use client'

import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Film, Camera, Clock, Share2, Plus, Send, VideoIcon } from 'lucide-react';

const FormularioCinematografico = () => {
  const [formData, setFormData] = useState({});
  const [currentSection, setCurrentSection] = useState(0);
  
  const sections = ['Perfil', 'Estilo', 'Referências', 'Técnico', 'Distribuição'];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
  };

  const handleInputChange = (name, value) => {
    setFormData(prev => ({...prev, [name]: value}));
  };
return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100 py-12">
      <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Film className="w-16 h-16 mx-auto text-yellow-500" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
            Questionário Cinematográfico
          </h1>
          <p className="text-yellow-100">
            Criando sua identidade visual única
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => setCurrentSection(index)}
                className={`flex flex-col items-center ${
                  currentSection === index 
                    ? 'text-yellow-500' 
                    : 'text-gray-300'
                }`}
              >
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mb-2 ${
                  currentSection === index 
                    ? 'border-yellow-500 bg-yellow-500/10' 
                    : 'border-gray-500'
                }`}>
                  {index + 1}
                </div>
                <span className="text-sm">{section}</span>
              </button>
            ))}
          </div>
          <div className="h-2 bg-gray-800 rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-yellow-500 to-yellow-200 rounded-full transition-all duration-500"
              style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
            />
          </div>
        </div>
