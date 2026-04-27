---
layout: page
title: Vision-Assisted Transparent-Aware LiDAR Mapping
title_ko: 비전 기반 투명 표면 인식 LiDAR 맵핑
description:    
    - Implementing a Fusion Pipeline, Combining Transparent-Aware Depth Estimation Network with LiDAR Map
    - Role — Camera-LiDAR calibration (Unitree L1 LiDAR and Realsense D435i)
description_ko:                                                             
    - PBL 과목 AI5003 — LiDAR 맵(Point-LIO)과 투명 표면 인식 신경망을 결합한 퓨전 파이프라인 구현.                                                       
    - <strong>역할:</strong> 희소 Unitree L1 LiDAR와 Realsense D435i 간 카메라-LiDAR 캘리브레이션 (<em>direct_visual_lidar_calibration</em>, ICRA 2023).     
img: /assets/img/project_preview/2025_transparent_mapping.gif
category: Research
horizontal: false
importance: 1
start_date: 2025-09-01
date: 2025-12-01
pub: GIST · Project-Based Learning in AI5003 (3 people)
pub_ko: GIST · 자율주행 융합 프로젝트 (AI5003, 3인)
---

Lab project at GIST MPIL. We use vision cues to detect transparent / glass surfaces that LiDAR sees through, and inject those constraints back into the mapping pipeline so the resulting map remains correct in indoor environments full of windows and partitions.
