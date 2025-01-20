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
